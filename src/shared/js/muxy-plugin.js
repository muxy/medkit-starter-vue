import Muxy from '@muxy/extensions-js';
import Vue from 'vue';

export default function VueMuxy(Vue, options) {
  if (!options.client_id) {
    throw new Error('Must specify extension client id when using the MEDKit Vue plugin');
  }

  const debug = new Muxy.DebuggingOptions();
  if (options.channel_id) {
    debug.channelID(options.channel_id);
  }
  if (options.user_id) {
    debug.userID(options.user_id);
  }
  debug.role(options.role || 'viewer');
  Muxy.debug(debug);

  const setup = {
    clientID: options.client_id
  };
  if (options.ua_string) {
    setup.uaString = options.ua_string;
  }
  Muxy.setup(setup);

  Vue.prototype.$muxy = Muxy;
  Vue.prototype.$medkit = new Muxy.SDK();
}
