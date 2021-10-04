<template>
  <div class="panel">
    <h1>Panel Extension</h1>

    <ComingSoon v-if="showComingSoon" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { provideMEDKit } from "@/shared/hooks/use-medkit";

import analytics from "@/shared/analytics";
import globals from "@/shared/globals";

import { ChannelState } from "@/shared/types/channel-state";

import ComingSoon from "@/shared/views/ComingSoon.vue";

export default defineComponent({
  components: { ComingSoon },

  setup() {
    const showComingSoon = ref(true);

    // MEDKit is initialized and provided to the Vue provide/inject system
    const medkit = provideMEDKit({
      channelId: globals.TESTING_CHANNEL_ID,
      clientId: globals.CLIENT_ID,
      role: "viewer",
      uaString: globals.UA_STRING,
      userId: globals.TESTING_USER_ID,
    });

    // MEDKit must fully load before it is available
    medkit.loaded().then(() => {
      if (globals.UA_STRING) {
        analytics.setMEDKit(medkit);
        analytics.startKeepAliveHeartbeat();
      }

      // Certain events will be broadcast automatically in response to
      // server actions. This event is sent whenever the channel state
      // is changed by the broadcaster.
      medkit.listen("channel_state_update", (newState: ChannelState) => {
        console.log("Channel state has been updated");
        console.log(JSON.stringify(newState));
        showComingSoon.value = newState?.show_coming_soon || false;
      });
    });

    return {
      showComingSoon,
    };
  },
});
</script>

<style lang="scss">
@import "@/shared/scss/base.scss";

.panel {
  height: 100vh;
  width: 100vw;

  background-color: rgba(50, 50, 50, 0.6);
  color: white;
  padding: 1em;
}
</style>
