import { inject, provide, InjectionKey } from "vue";

import Muxy, { MEDKit, SetupOptions } from "@muxy/extensions-js";

// MEDKit Options
interface VueMEDKitOptions {
  clientId: string;

  channelId?: string;
  environment?: string;
  jwt?: string;
  role?: string;
  uaString?: string;
  url?: string;
  userId?: string;
}

const MEDKitInjectionKey: InjectionKey<MEDKit> = Symbol("medkit");

export function provideMEDKit(options: VueMEDKitOptions) {
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

  const setup: SetupOptions = {
    clientID: options.clientId,
  };

  if (options.uaString) {
    setup.uaString = options.uaString;
  }

  Muxy.debug(opts);
  Muxy.setup(setup);

  const medkit = new Muxy.SDK();
  provide<MEDKit>(MEDKitInjectionKey, medkit);

  return medkit;
}

export function useMEDKit() {
  const medkit = inject<MEDKit>(MEDKitInjectionKey);
  if (!medkit) {
    throw new Error("MEDKit could not be created");
  }

  return { medkit };
}
