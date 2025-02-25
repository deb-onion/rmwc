import { NextResponse } from 'next/server';

export async function GET() {
  const receptionInspiration = {
    items: [
      {
        id: 1,
        title: 'Grand Ballroom Reception',
        description: 'Elegant celebration in our grand ballroom',
        image: '/images/venues/fairmont-banff.jpg',
        category: 'indoor'
      },
      {
        id: 2,
        title: 'Lakeside Reception',
        description: 'Celebrate with stunning lake views',
        image: '/images/venues/lake-louise.jpg',
        category: 'waterfront'
      },
      {
        id: 3,
        title: 'Mountain Terrace Reception',
        description: 'Open-air celebration with mountain vistas',
        image: '/images/venues/silvertip.jpg',
        category: 'outdoor'
      }
    ]
  };

  return NextResponse.json(receptionInspiration);
} 