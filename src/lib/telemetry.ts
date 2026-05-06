import { track } from "@vercel/analytics";

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // In a real production environment, this calls Vercel Analytics.
  
  if (process.env.NODE_ENV === "development") {
    console.log(`[TELEMETRY] ${eventName}`, properties);
  }

  // Vercel Analytics integration
  try {
    track(eventName, properties);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[TELEMETRY ERROR]", error);
    }
  }
};
