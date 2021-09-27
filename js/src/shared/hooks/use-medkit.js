import { inject, provide } from "vue";
import Muxy from "@muxy/extensions-js";

// MEDKit Options
/**
 * @typedef {Object} VueMEDKitOptions
 * @property {string} clientId - Client ID, as obtained from twitch.
 * @property {string?} channelId - Channel ID, used for testing. Optional.
 * @property {string?} environment - Override environment instead of one derived by MEDKit
 * @property {string?} jwt - Override JWT, isntead of using the provided one.
 * @property {string?} role - JWT role, used in sandbox only, to override the provided one.
 * @property {string?} uaString - UA string for analytics.
 * @property {string?} url - URL to use instead of the default muxy API endpoints.
 * @property {string?} userId - User ID, used for testing.
 **/

/**
 * Symbol to be used in vue injection
 **/
const MEDKitInjectionKey = Symbol("medkit");

/**
 * Sets up MEDKit so that the useMEDKit function will return a valid MEDKit instance
 * @param {VueMEDKitOptions} options - Options
 */
export function provideMEDKit(options) {
  if (!options.clientId) {
    throw new Error("Must specify client id when using the MEDKit Vue plugin");
  }

  const opts = new Muxy.DebuggingOptions();
  opts.role(options.role || "viewer");

  if (options.environment) {
    opts.environment(options.environment);
  }

  if (options.jwt) {
    opts.jwt(options.jwt);
  }

  if (options.channelId) {
    opts.channelID(options.channelId);
  }

  if (options.userId) {
    opts.userID(options.userId);
  }

  if (options.url) {
    opts.url(options.url);
  }

  const setup = {
    clientID: options.clientId,
  };

  if (options.uaString) {
    setup.uaString = options.uaString;
  }

  Muxy.debug(opts);
  Muxy.setup(setup);

  const medkit = new Muxy.SDK();
  provide(MEDKitInjectionKey, medkit);

  return medkit;
}

export function useMEDKit() {
  const medkit = inject(MEDKitInjectionKey);
  if (!medkit) {
    throw new Error("MEDKit could not be created");
  }

  return { medkit };
}
