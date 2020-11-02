<template>
  <div>Overlay Extension</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import analytics from "@/shared/analytics";
import globals from "@/shared/globals";

import { provideMEDKit } from "@/shared/hooks/use-medkit";

export default defineComponent({
  name: "App",

  setup() {
    const medkit = provideMEDKit({
      channelId: globals.TESTING_CHANNEL_ID,
      clientId: globals.CLIENT_ID,
      role: "viewer",
      uaString: globals.UA_STRING,
      userId: globals.TESTING_USER_ID,
    });

    analytics.startKeepAliveHeartbeat(medkit, "PROJECT_NAME");
  },
});
</script>

<style lang="scss">
@import "~@/shared/scss/base.scss";
</style>
