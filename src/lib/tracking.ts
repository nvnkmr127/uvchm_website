export interface TrackingData {
  page_url: string;
  referrer: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  device_type?: string;
  screen_res?: string;
}

export function getTrackingMetadata(): TrackingData {
  if (typeof window === 'undefined') {
    return {
      page_url: '',
      referrer: 'Direct',
      device_type: 'Unknown',
    };
  }

  const urlParams = new URLSearchParams(window.location.search);
  const ua = navigator.userAgent || '';
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
  const isTablet = /Tablet|iPad/i.test(ua);
  
  const device_type = isTablet ? 'Tablet' : isMobile ? 'Mobile' : 'Desktop';

  return {
    page_url: window.location.pathname + window.location.search,
    referrer: document.referrer || 'Direct',
    utm_source: urlParams.get('utm_source') || null,
    utm_medium: urlParams.get('utm_medium') || null,
    utm_campaign: urlParams.get('utm_campaign') || null,
    device_type,
    screen_res: typeof window.screen !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : '',
  };
}
