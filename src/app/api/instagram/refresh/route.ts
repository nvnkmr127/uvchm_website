import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.INSTAGRAM_LONG_LIVED_TOKEN || process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'Instagram access token not configured in environment variables.' },
      { status: 400 }
    );
  }

  try {
    const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`;
    const response = await fetch(refreshUrl, { method: 'GET', cache: 'no-store' });
    const data = await response.json();

    if (data && data.access_token) {
      return NextResponse.json({
        success: true,
        accessToken: data.access_token,
        tokenType: data.token_type,
        expiresIn: data.expires_in,
        refreshedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: false, data }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || 'Token refresh failed' }, { status: 500 });
  }
}
