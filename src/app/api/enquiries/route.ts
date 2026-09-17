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
        page_url VARCHAR(500),
        referrer VARCHAR(500),
        utm_source VARCHAR(255),
        utm_medium VARCHAR(255),
        utm_campaign VARCHAR(255),
        search_keywords VARCHAR(255),
        visit_count INT DEFAULT 1,
        device_type VARCHAR(100),
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

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get('key') || req.headers.get('x-admin-key');
    const validKey = process.env.ADMIN_PASSCODE || 'uvchm2026';

    if (key !== validKey) {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
    }

    const { ids } = await req.json();

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'No IDs provided' }, { status: 400 });
    }

    if (process.env.DATABASE_URL) {
      // Delete multiple IDs from Neon Postgres
      await sql`DELETE FROM inquiries WHERE id = ANY(${ids})`;
    }

    return NextResponse.json({ success: true, deletedCount: ids.length });
  } catch (error) {
    console.error('Error deleting inquiries:', error);
    return NextResponse.json({ error: 'Failed to delete inquiries' }, { status: 500 });
  }
}
