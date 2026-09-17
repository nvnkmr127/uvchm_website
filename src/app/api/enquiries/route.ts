import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get('key') || req.headers.get('x-admin-key');
    const validKey = process.env.ADMIN_PASSCODE || 'uvchm2026';

    if (key !== validKey) {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({
        success: true,
        inquiries: [],
        message: 'DATABASE_URL is not set in environment variables.',
      });
    }

    // Ensure inquiries table exists
    await sql`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255),
        course VARCHAR(255),
        city VARCHAR(255),
        message TEXT,
        source VARCHAR(255) DEFAULT 'Website Form',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    const inquiries = await sql`
      SELECT * FROM inquiries ORDER BY id DESC LIMIT 500;
    `;

    const response = NextResponse.json({ success: true, inquiries });
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');
    return response;
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
  }
}
