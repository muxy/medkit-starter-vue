// This module maps globals injected by Webpack (or from other sources)
// to an accessible module usable by our code.
export class Globals {
  public ANALYTICS!: boolean;
  public CLIENT_ID!: string;
  public PRODUCTION!: boolean;
  public UA_STRING!: string;

  public TESTING_CHANNEL_ID!: string | undefined;
  public TESTING_USER_ID!: string | undefined;
}

declare let process: {
  env: {
    NODE_ENV: string;
    VUE_APP_ANALYTICS: boolean;
    VUE_APP_CLIENT_ID: string;
    VUE_APP_TESTING_CHANNEL_ID: string;
    VUE_APP_TESTING_USER_ID: string;
    VUE_APP_UA_STRING: string;
  };
};

const g: Globals = {
  ANALYTICS: process.env.VUE_APP_ANALYTICS,
  CLIENT_ID: process.env.VUE_APP_CLIENT_ID,
  PRODUCTION: process.env.NODE_ENV === "production",
  UA_STRING: process.env.VUE_APP_UA_STRING,

  TESTING_CHANNEL_ID: process.env.VUE_APP_TESTING_CHANNEL_ID,
  TESTING_USER_ID: process.env.VUE_APP_TESTING_USER_ID,
};

export default g;
