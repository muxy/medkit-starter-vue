<template>
  <div class="component">
    <h1>Component Extension</h1>

    <ComingSoon />
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";

import { provideMEDKit } from "@/shared/hooks/use-medkit";

import analytics from "@/shared/analytics";
import globals from "@/shared/globals";

import ComingSoon from "@/shared/views/ComingSoon.vue";

export default defineComponent({
  components: { ComingSoon },

  setup() {
    const medkit = provideMEDKit({
      channelId: globals.TESTING_CHANNEL_ID,
      clientId: globals.CLIENT_ID,
      role: "viewer",
      uaString: globals.UA_STRING,
      userId: globals.TESTING_USER_ID,
    });

    analytics.setMEDKit(medkit);
    analytics.startKeepAliveHeartbeat();
  },
});
</script>

<style lang="scss">
@import "@/shared/scss/base.scss";

.component {
  height: 100%;
  width: 100%;

  background-color: rgba(50, 50, 50, 0.6);
  color: white;
}
</style>
