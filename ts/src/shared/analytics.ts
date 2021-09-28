import { MEDKit } from "@muxy/extensions-js";

interface AnalyticsEvent {
  action: string;
  value: number;
  label: string;
}

let medkit: MEDKit | null = null;
let category = "SET_APP_CATEGORY";

// Send a keep alive heartbeat to the analytics system every minute.
const HEARTBEAT_TIMEOUT_MS = 60 * 1000;

export default {
  setMEDKit(appMedkit: MEDKit): void {
    medkit = appMedkit;
  },

  setCategory(appCategory: string): void {
    category = appCategory;
  },

  // Sends a single event namespaced to the provided category.
  async sendEvent(event: AnalyticsEvent): Promise<void> {
    if (!medkit?.analytics) {
      console.error("Event not sent to analytics processor");
      return Promise.resolve();
    }

    await medkit?.loaded();
    return medkit?.analytics.sendEvent(
      category,
      event.action,
      event.value,
      event.label
    );
  },

  // Starts a cycle of sending live heartbeat events.
  startKeepAliveHeartbeat(): void {
    this.sendEvent({
      action: "heartbeat",
      value: 1,
      label: "Viewer heartbeat",
    });

    window.setTimeout(() => {
      this.startKeepAliveHeartbeat();
    }, HEARTBEAT_TIMEOUT_MS);
  },

  // Send a single "pageview" event.
  async sendPageView(): Promise<void> {
    if (!medkit?.analytics) {
      console.error("Page view not sent to analytics processor");
      return Promise.resolve();
    }

    await medkit?.loaded();
    return medkit?.analytics.pageView();
  },
};
