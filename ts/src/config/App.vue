<template>
  <div class="config">
    <h1>Broadcaster Configuration</h1>

    <ComingSoon />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { provideMEDKit } from "@/shared/hooks/use-medkit";

import globals from "@/shared/globals";

import ComingSoon from "@/shared/views/ComingSoon.vue";

export default defineComponent({
  components: { ComingSoon },

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

.config {
  height: 100%;
  width: 100%;

  background-color: rgba(50, 50, 50, 0.6);
  color: white;
}
</style>
