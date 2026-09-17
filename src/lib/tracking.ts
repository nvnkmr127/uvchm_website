export interface TrackingData {
  page_url: string;
  referrer: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  search_keywords?: string | null;
  visit_count: number;
  device_type?: string;
  screen_res?: string;
}

export function getTrackingMetadata(): TrackingData {
  if (typeof window === 'undefined') {
    return {
      page_url: '',
      referrer: 'Direct',
      visit_count: 1,
      device_type: 'Unknown',
    };
  }

  // Visit Count Tracking
  let visitCount = 1;
  try {
    const storedVisits = localStorage.getItem('uvchm_visit_count');
    const currentVisits = storedVisits ? parseInt(storedVisits, 10) : 0;
    
    // Check if new session or pageview
    const lastVisitTime = localStorage.getItem('uvchm_last_visit');
    const now = Date.now();
    
    // Increment visit count if last visit was > 10 mins ago or first visit
    if (!lastVisitTime || (now - parseInt(lastVisitTime, 10) > 10 * 60 * 1000)) {
      visitCount = currentVisits + 1;
      localStorage.setItem('uvchm_visit_count', visitCount.toString());
    } else {
      visitCount = currentVisits || 1;
    }
    localStorage.setItem('uvchm_last_visit', now.toString());
  } catch (e) {
    console.error('Error tracking visits', e);
  }

  // Search Keywords / Query Extraction
  const urlParams = new URLSearchParams(window.location.search);
  let keywords = urlParams.get('utm_term') || urlParams.get('q') || urlParams.get('query') || urlParams.get('keyword');

  if (!keywords && document.referrer) {
    try {
      const refUrl = new URL(document.referrer);
      const refParams = new URLSearchParams(refUrl.search);
      keywords = refParams.get('q') || refParams.get('query') || null;
    } catch (e) {
      // Ignore URL parse errors
    }
  }

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
    search_keywords: keywords || null,
    visit_count: visitCount,
    device_type,
    screen_res: typeof window.screen !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : '',
  };
}
