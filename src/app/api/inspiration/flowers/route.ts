import { NextResponse } from 'next/server';

export async function GET() {
  const flowersInspiration = {
    items: [
      {
        id: 1,
        title: 'Mountain Wildflowers',
        description: 'Local wildflower bouquet',
        image: '/images/quiz/landscape-meadow.jpg',
        category: 'natural'
      },
      {
        id: 2,
        title: 'Classic Rose Arrangement',
        description: 'Timeless rose bouquet',
        image: '/images/quiz/landscape-peaks.jpg',
        category: 'classic'
      },
      {
        id: 3,
        title: 'Alpine Inspired',
        description: 'Mountain-inspired floral design',
        image: '/images/quiz/landscape-lake.jpg',
        category: 'modern'
      }
    ]
  };

  return NextResponse.json(flowersInspiration);
} 