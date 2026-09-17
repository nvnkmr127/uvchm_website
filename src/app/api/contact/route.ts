import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      course,
      city,
      message,
      source,
      page_url,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
      device_type,
      screen_res,
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone are required.' },
        { status: 400 }
      );
    }

    // Insert into Neon Postgres
    if (process.env.DATABASE_URL) {
      // Create table with columns if missing
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
          device_type VARCHAR(100),
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `;

      // Safely add missing columns if table already existed without them
      await sql`ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS page_url VARCHAR(500);`;
      await sql`ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS referrer VARCHAR(500);`;
      await sql`ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS utm_source VARCHAR(255);`;
      await sql`ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS utm_medium VARCHAR(255);`;
      await sql`ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS utm_campaign VARCHAR(255);`;
      await sql`ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS device_type VARCHAR(100);`;

      await sql`
        INSERT INTO inquiries (
          name, phone, email, course, city, message, source, page_url, referrer, utm_source, utm_medium, utm_campaign, device_type
        )
        VALUES (
          ${name},
          ${phone},
          ${email || null},
          ${course || null},
          ${city || null},
          ${message || null},
          ${source || 'Website Form'},
          ${page_url || null},
          ${referrer || null},
          ${utm_source || null},
          ${utm_medium || null},
          ${utm_campaign || null},
          ${device_type || null}
        )
      `;
    } else {
      console.log('Skipping database insert because DATABASE_URL is not set.', {
        name,
        phone,
        email,
        course,
        city,
        message,
        source,
        page_url,
        referrer,
        utm_source,
        device_type,
      });
    }

    // Send Email via Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'UVCHM Admissions <onboarding@resend.dev>',
        to: process.env.ADMIN_EMAIL || 'Info@uvchm.com',
        subject: `New Admission Inquiry from ${name}`,
        html: `
          <h2>New Admission Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          <p><strong>City/Village:</strong> ${city || 'Not provided'}</p>
          <p><strong>Course of Interest:</strong> ${course || 'Not specified'}</p>
          <hr />
          <h3>User Tracking & Analytics</h3>
          <p><strong>Form Source:</strong> ${source || 'Website Form'}</p>
          <p><strong>Page URL:</strong> ${page_url || 'Direct/Unknown'}</p>
          <p><strong>Referrer:</strong> ${referrer || 'Direct'}</p>
          <p><strong>Device:</strong> ${device_type || 'Unknown'} (${screen_res || 'N/A'})</p>
          ${utm_source ? `<p><strong>UTM Source:</strong> ${utm_source}</p>` : ''}
          ${utm_campaign ? `<p><strong>UTM Campaign:</strong> ${utm_campaign}</p>` : ''}
          <br/>
          <p><strong>Message:</strong></p>
          <p>${message || 'No message provided.'}</p>
        `,
      });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
