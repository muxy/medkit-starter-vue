/**
 * @typedef {Object} AnalyticsEvent
 * @property {string} action - The action of the analytics event, like 'heartbeat' or 'page-view'
 * @property {number} value - The value associated with the analytics event
 * @property {string} label - The label associated with the analytics event
 **/

/**
 * @type {MEDKit}
 **/
let medkit = null;
let category = "SET_APP_CATEGORY";

// Send a keep alive heartbeat to the analytics system every minute.
const HEARTBEAT_TIMEOUT_MS = 60 * 1000;

export default {
  /**
   * Sets the cached medkit instance
   * @param {MEDKit} appMedkit - MEDKit instance
   **/
  setMedkit(appMedkit) {
    medkit = appMedkit;
  },

  /**
   * Sets the cached category
   * @param {string} appCategory - category
   **/
  setCategory(appCategory) {
    category = appCategory;
  },

  /**
   * Sends a single event namespaced to the provided category.
   * @param {AnalyticsEvent} event - The event itself
   * @returns {Promise<void>} - Promise that is resolved when the analytics event is sent.
   *  Resolves instantly if analytics isn't enabled.
   */
  async sendEvent(event) {
    if (!medkit?.analytics) {
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

  /**
   * Starts a cycle of sending live heartbeat events.
   */
  startKeepAliveHeartbeat() {
    this.sendEvent({
      action: "heartbeat",
      value: 1,
      label: "Viewer heartbeat",
    });

    window.setTimeout(() => {
      this.startKeepAliveHeartbeat();
    }, HEARTBEAT_TIMEOUT_MS);
  },

  /**
   * Send a single "pageview" event.
   * @returns {Promise<void>} - Promise that is resolved when the analytics event is sent.
   *  Resolves instantly if analytics isn't enabled.
   */
  async sendPageView() {
    if (!medkit?.analytics) {
      return Promise.resolve();
    }

    await medkit?.loaded();
    return medkit?.analytics.pageView();
  },
};
