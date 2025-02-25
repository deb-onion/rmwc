import React, { useState, useEffect } from 'react';
import { motion, Reorder, PanInfo } from 'framer-motion';
import { dataLayerConfig } from '@/lib/analytics/config';
import { dynamicLoad } from '@/lib/utils/dynamicLoading';

interface InspirationItem {
  id: string | number;
  image: string;
  category: string;
  title: string;
  description?: string;
}

interface VisionBoardItem extends InspirationItem {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

interface InspirationResponse {
  items: InspirationItem[];
}

export const VisionBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Ceremony');
  const [categories] = useState([
    'Ceremony',
    'Reception',
    'Flowers',
    'Decor',
    'Attire',
    'Colors',
    'Details'
  ]);
  const [inspirationItems, setInspirationItems] = useState<InspirationItem[]>([]);
  const [boardItems, setBoardItems] = useState<VisionBoardItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    loadInspirationItems(selectedCategory);
  }, [selectedCategory]);

  const loadInspirationItems = async (category: string) => {
    try {
      const response = await dynamicLoad<InspirationResponse>(async () => {
        // Simulated API call - replace with actual API endpoint
        return fetch(`/api/inspiration/${category.toLowerCase()}`).then(res => res.json());
      });
      setInspirationItems(response.items);

      // Track category change
      window.dataLayer?.push(dataLayerConfig.featureInteraction(
        'vision_board',
        'category_change',
        { category }
      ));
    } catch (error) {
      console.error('Failed to load inspiration items:', error);
      setInspirationItems([]); // Set empty array on error
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (item: VisionBoardItem, info: PanInfo) => {
    setIsDragging(false);
    const updatedItems = boardItems.map(boardItem => 
      boardItem.id === item.id
        ? {
            ...boardItem,
            x: boardItem.x + info.offset.x,
            y: boardItem.y + info.offset.y
          }
        : boardItem
    );
    setBoardItems(updatedItems);

    window.dataLayer?.push(dataLayerConfig.featureInteraction(
      'vision_board',
      'item_moved',
      { itemId: item.id, category: item.category }
    ));
  };

  const addToBoardItems = (item: InspirationItem) => {
    const newBoardItem: VisionBoardItem = {
      ...item,
      x: Math.random() * 100 - 50, // Random position
      y: Math.random() * 100 - 50,
      scale: 1,
      rotation: Math.random() * 10 - 5 // Slight random rotation
    };
    setBoardItems([...boardItems, newBoardItem]);

    // Track item addition
    window.dataLayer?.push(dataLayerConfig.featureInteraction(
      'vision_board',
      'item_added',
      { itemId: item.id, category: item.category }
    ));
  };

  const removeFromBoard = (itemId: string | number) => {
    setBoardItems(boardItems.filter(item => item.id !== itemId));

    // Track item removal
    window.dataLayer?.push(dataLayerConfig.featureInteraction(
      'vision_board',
      'item_removed',
      { itemId: itemId.toString() }
    ));
  };

  const handleCategoryReorder = (newOrder: string[]) => {
    setSelectedCategory(newOrder[0]);
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      {/* Category Selection */}
      <div className="mb-8">
        <Reorder.Group
          axis="x"
          values={categories}
          onReorder={handleCategoryReorder}
          className="flex space-x-4 overflow-x-auto pb-4"
        >
          {categories.map(category => (
            <Reorder.Item
              key={category}
              value={category}
              className={`px-6 py-3 rounded-full cursor-pointer transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-white hover:bg-primary-100'
              }`}
            >
              {category}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      <div className="flex gap-8">
        {/* Inspiration Panel */}
        <div className="w-1/4 bg-white rounded-lg p-4 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Inspiration</h3>
          <div className="grid grid-cols-2 gap-4">
            {inspirationItems.map(item => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={() => addToBoardItems(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Board Canvas */}
        <div className="flex-1 bg-white rounded-lg p-8 shadow-lg relative min-h-[600px]">
          <h2 className="text-2xl font-semibold mb-6">Your Vision Board</h2>
          {boardItems.map(item => (
            <motion.div
              key={item.id}
              drag
              dragMomentum={false}
              dragElastic={0.1}
              onDragStart={handleDragStart}
              onDragEnd={(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => 
                handleDragEnd(item, info)
              }
              initial={{ x: item.x, y: item.y, rotate: item.rotation }}
              animate={{ scale: isDragging ? 1.1 : 1 }}
              whileHover={{ scale: 1.05 }}
              className="absolute cursor-move"
              style={{ x: item.x, y: item.y }}
            >
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
                <motion.button
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100"
                  onClick={() => removeFromBoard(item.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 