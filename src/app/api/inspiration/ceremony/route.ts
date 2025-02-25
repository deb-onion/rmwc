import { NextResponse } from 'next/server';

export async function GET() {
  // Placeholder data for ceremony inspiration
  const ceremonyInspiration = {
    items: [
      {
        id: 1,
        title: 'Mountain Peak Ceremony',
        description: 'Exchange vows with breathtaking mountain views',
        image: '/images/venues/fairmont-banff.jpg',
        category: 'outdoor'
      },
      {
        id: 2,
        title: 'Lakeside Ceremony',
        description: 'A serene ceremony by the crystal-clear waters',
        image: '/images/venues/lake-louise.jpg',
        category: 'waterfront'
      },
      {
        id: 3,
        title: 'Forest Glade Ceremony',
        description: 'Intimate ceremony surrounded by ancient trees',
        image: '/images/venues/emerald-lake.jpg',
        category: 'forest'
      }
    ]
  };

  return NextResponse.json(ceremonyInspiration);
} 