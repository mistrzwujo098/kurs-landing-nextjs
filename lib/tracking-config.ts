// Konfiguracja trackingu - używa zmiennych środowiskowych
export const trackingConfig = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || 'lamiglowki',
  workerUrl: process.env.NEXT_PUBLIC_TRACKING_WORKER_URL || 'https://tracking-api.kacperczaczyk.workers.dev',

  facebook: {
    pixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '',
  },

  google: {
    conversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '',
  },

  tiktok: {
    pixelId: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || '',
  },
}

// Sprawdź czy tracking jest włączony
export const isTrackingEnabled = () => {
  return !!(
    trackingConfig.facebook.pixelId ||
    trackingConfig.google.conversionId ||
    trackingConfig.tiktok.pixelId
  )
}
