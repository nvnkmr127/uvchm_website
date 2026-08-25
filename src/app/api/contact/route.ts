import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, course, city, message, source } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone are required.' },
        { status: 400 }
      );
    }

    // Insert into Neon Postgres
    await sql`
      INSERT INTO inquiries (name, phone, email, course, city, message, source)
      VALUES (${name}, ${phone}, ${email || null}, ${course || null}, ${city || null}, ${message || null}, ${source || 'Website Form'})
    `;

    // Send Email via Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'UVCHM Admissions <onboarding@resend.dev>', // Change to your verified domain later
        to: process.env.ADMIN_EMAIL || 'Info@uvchm.com',
        subject: `New Admission Inquiry from ${name}`,
        html: `
          <h2>New Admission Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          <p><strong>City/Village:</strong> ${city || 'Not provided'}</p>
          <p><strong>Course of Interest:</strong> ${course || 'Not specified'}</p>
          <p><strong>Source:</strong> ${source || 'Website Form'}</p>
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
