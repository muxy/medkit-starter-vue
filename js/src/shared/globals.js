// This module maps globals injected by Webpack (or from other sources)
// to an accessible module usable by our code.

/**
 * @typedef {Object} Globals
 * @property {boolean} ANALYTICS - Boolean if analytics is enabled or not
 * @property {string}  CLIENT_ID - Client ID, as obtained from twitch.
 * @property {boolean} PRODUCTION - true if this is being built in production.
 * @property {string}  UA_STRING - UA string, as obtained from google analytics
 * @property {string | undefined} TESTING_CHANNEL_ID - string
 * @property {string | undefined} TESTING_USER_ID - Boolean if analytics is enabled or not
 **/

/**
 * @type Globals
 **/
const g = {
  ANALYTICS: process.env.VUE_APP_ANALYTICS,
  CLIENT_ID: process.env.VUE_APP_CLIENT_ID,
  PRODUCTION: process.env.NODE_ENV === "production",
  UA_STRING: process.env.VUE_APP_UA_STRING,

  TESTING_CHANNEL_ID: process.env.VUE_APP_TESTING_CHANNEL_ID,
  TESTING_USER_ID: process.env.VUE_APP_TESTING_USER_ID,
};

export default g;
