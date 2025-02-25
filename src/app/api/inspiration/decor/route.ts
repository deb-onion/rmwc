import { NextResponse } from 'next/server';

export async function GET() {
  const decorInspiration = {
    items: [
      {
        id: 1,
        title: 'Mountain Chic',
        description: 'Modern mountain-inspired decor',
        image: '/images/venues/buffalo-mountain.jpg',
        category: 'modern'
      },
      {
        id: 2,
        title: 'Rustic Elegance',
        description: 'Natural elements with elegant touches',
        image: '/images/venues/emerald-lake.jpg',
        category: 'rustic'
      },
      {
        id: 3,
        title: 'Alpine Luxury',
        description: 'Luxurious mountain resort styling',
        image: '/images/venues/kananaskis.jpg',
        category: 'luxury'
      }
    ]
  };

  return NextResponse.json(decorInspiration);
} 