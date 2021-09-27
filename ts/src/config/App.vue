<template>
  <h1>Broadcaster Configuration</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { provideMEDKit } from "@/shared/hooks/use-medkit";

import globals from "@/shared/globals";

export default defineComponent({
  name: "App",

  setup() {
    provideMEDKit({
      channelId: globals.TESTING_CHANNEL_ID,
      clientId: globals.CLIENT_ID,
      role: "broadcaster",
      uaString: globals.UA_STRING,
      userId: globals.TESTING_USER_ID,
    });
  },
});
</script>

<style lang="scss">
@import "@/shared/scss/base.scss";
</style>
