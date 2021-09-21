import { MEDKit } from "@muxy/extensions-js";

interface AnalyticsEvent {
  action: string;
  value: number;
  label: string;
}

// Send a keep alive heartbeat to the analytics system every minute.
const HEARTBEAT_TIMEOUT_MS = 60 * 1000;

const mostRecentData = {};
export default {
  // Sends a single event namespaced to the provided category.
  async sendEvent(
    medkit: MEDKit,
    category: string,
    event: AnalyticsEvent
  ): Promise<void> {
    if (!medkit.analytics) {
      return Promise.resolve();
    }

    await medkit.loaded();
    return medkit.analytics.sendEvent(
      category,
      event.action,
      event.value,
      event.label
    );
  },

  // Starts a cycle of sending live heartbeat events.
  startKeepAliveHeartbeat(medkit: MEDKit, category: string) {
    this.sendEvent(medkit, category, {
      action: "heartbeat",
      value: 1,
      label: "Viewer heartbeat",
    });

    window.setTimeout(() => {
      this.startKeepAliveHeartbeat(medkit, category);
    }, HEARTBEAT_TIMEOUT_MS);
  },

  // Send a single "pageview" event.
  async sendPageView(medkit: MEDKit): Promise<void> {
    if (!medkit.analytics) {
      return Promise.resolve();
    }

    await medkit.loaded();
    return medkit.analytics.pageView();
  },

  // eslint-disable-next-line
  mostRecentDataSent(): any {
    return mostRecentData;
  },
};
