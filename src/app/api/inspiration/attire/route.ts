import { NextResponse } from 'next/server';

export async function GET() {
  const attireInspiration = {
    items: [
      {
        id: 1,
        title: 'Mountain Bride',
        description: 'Adventure-ready bridal style',
        image: '/images/quiz/landscape-peaks.jpg',
        category: 'bridal'
      },
      {
        id: 2,
        title: 'Alpine Groom',
        description: 'Mountain-inspired groom attire',
        image: '/images/quiz/landscape-lodge.jpg',
        category: 'groom'
      },
      {
        id: 3,
        title: 'Wedding Party',
        description: 'Coordinated mountain wedding party looks',
        image: '/images/quiz/landscape-meadow.jpg',
        category: 'party'
      }
    ]
  };

  return NextResponse.json(attireInspiration);
} 