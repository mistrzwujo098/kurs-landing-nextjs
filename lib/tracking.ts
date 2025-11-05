import { trackingConfig } from './tracking-config'

// Typy eventów
export type TrackingEventType =
  | 'PageView'
  | 'ViewContent'
  | 'AddToCart'
  | 'InitiateCheckout'
  | 'Purchase'
  | 'Lead'
  | 'CompleteRegistration'
  | 'Contact'
  | 'SubmitApplication'
  | 'Schedule'
  | 'StartTrial'

export interface TrackingEventData {
  event_name: TrackingEventType
  event_id?: string
  value?: number
  currency?: string
  content_name?: string
  content_category?: string
  content_ids?: string[]
  contents?: Array<{
    id: string
    quantity?: number
    item_price?: number
  }>
  [key: string]: any
}

// Główna funkcja do wysyłania eventów
export async function trackEvent(
  eventType: TrackingEventType,
  eventData: Partial<TrackingEventData> = {}
): Promise<void> {
  // Nie trackuj w środowisku deweloperskim (opcjonalnie)
  if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_ENABLE_DEV_TRACKING) {
    console.log('[Tracking] Dev mode - event:', eventType, eventData)
    return
  }

  try {
    // Przygotuj dane
    const fullEventData: TrackingEventData = {
      event_name: eventType,
      event_id: generateEventId(),
      ...eventData,
    }

    // Wyślij do workera
    const response = await fetch(`${trackingConfig.workerUrl}/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectId: trackingConfig.projectId,
        eventData: fullEventData,
        userAgent: navigator.userAgent,
        url: window.location.href,
        referrer: document.referrer,
        timestamp: Date.now(),
      }),
    })

    if (!response.ok) {
      throw new Error(`Tracking failed: ${response.statusText}`)
    }

    console.log('[Tracking] Event sent:', eventType)
  } catch (error) {
    console.error('[Tracking] Error:', error)
  }
}

// Generuj unikalny ID dla eventu
function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(7)}`
}

// Pomocnicze funkcje dla konkretnych eventów
export const tracking = {
  // Wyświetlenie strony
  pageView: (pageName?: string) => {
    trackEvent('PageView', {
      content_name: pageName || document.title,
    })
  },

  // Wyświetlenie produktu/contentu
  viewContent: (contentName: string, value?: number) => {
    trackEvent('ViewContent', {
      content_name: contentName,
      value,
      currency: 'PLN',
    })
  },

  // Lead (np. zapisanie się do newslettera)
  lead: (contentName?: string) => {
    trackEvent('Lead', {
      content_name: contentName || 'Newsletter Signup',
      currency: 'PLN',
    })
  },

  // Rozpoczęcie procesu zakupu
  initiateCheckout: (value: number, contentName: string) => {
    trackEvent('InitiateCheckout', {
      value,
      currency: 'PLN',
      content_name: contentName,
    })
  },

  // Zakup
  purchase: (value: number, contentName: string, orderId?: string) => {
    trackEvent('Purchase', {
      value,
      currency: 'PLN',
      content_name: contentName,
      transaction_id: orderId,
    })
  },

  // Kontakt
  contact: (method?: string) => {
    trackEvent('Contact', {
      content_name: method || 'Contact Form',
    })
  },

  // Rozpoczęcie rejestracji
  startRegistration: (packageName: string) => {
    trackEvent('CompleteRegistration', {
      content_name: packageName,
      content_category: 'registration',
    })
  },

  // Rozpoczęcie trial
  startTrial: (trialType: string) => {
    trackEvent('StartTrial', {
      content_name: trialType,
    })
  },

  // Custom event
  custom: (eventName: string, data?: Record<string, any>) => {
    trackEvent(eventName as TrackingEventType, data)
  },
}

// Browser-side tracking initialization
export function initTracking() {
  if (typeof window === 'undefined') return

  // Track page view on load
  tracking.pageView()

  // Track page visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      tracking.pageView('Return to Page')
    }
  })

  console.log('[Tracking] Initialized')
}
