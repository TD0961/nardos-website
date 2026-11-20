// Google Analytics and Google Ads conversion tracking utilities

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Trigger custom Google Analytics & Google Ads conversion event
 */
export function trackEvent(action: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}

/**
 * Track phone call clicks for Google Ads & Analytics
 */
export function trackCallClick(source: string = "website") {
  trackEvent("call_click", {
    event_category: "Lead Generation",
    event_label: `Phone Call via ${source}`,
    phone_number: "0938125777",
    send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION_ID,
  });
}

/**
 * Track WhatsApp chat clicks for Google Ads & Analytics
 */
export function trackWhatsAppClick(source: string = "website", propertyTitle?: string) {
  trackEvent("whatsapp_click", {
    event_category: "Lead Generation",
    event_label: propertyTitle ? `WhatsApp for ${propertyTitle}` : `WhatsApp via ${source}`,
    property_title: propertyTitle || "General",
    send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_ID,
  });
}

/**
 * Track lead inquiry submissions
 */
export function trackInquirySubmit(propertyTitle?: string, leadType: string = "Form") {
  trackEvent("inquiry_submit", {
    event_category: "Conversion",
    event_label: propertyTitle ? `Inquiry for ${propertyTitle}` : `General Consultation (${leadType})`,
    property_title: propertyTitle || "General",
    send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID,
  });
}

/**
 * Track property view impressions
 */
export function trackPropertyView(propertyTitle: string, price: string, area: string) {
  trackEvent("view_item", {
    items: [
      {
        item_id: propertyTitle,
        item_name: propertyTitle,
        item_category: area,
        price: price,
      },
    ],
  });
}
