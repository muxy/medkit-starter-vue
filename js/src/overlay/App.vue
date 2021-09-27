<template>
  <div>Overlay Extension</div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import { provideMEDKit } from "@/shared/hooks/use-medkit";

import analytics from "@/shared/analytics";
import globals from "@/shared/globals";

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

    analytics.setMedkit(medkit);
    analytics.startKeepAliveHeartbeat();
  },
});
</script>

<style lang="scss">
@import "@/shared/scss/base.scss";
</style>
