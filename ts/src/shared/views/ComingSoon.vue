<template>
  <h1>COMING SOON</h1>

  <h3>MEDKit User Info</h3>
  <pre>{{ medkitInfo }}</pre>

  <h3>Current Channel State</h3>
  <pre>{{ channelState }}</pre>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useMEDKit } from "@/shared/hooks/use-medkit";
import { ChannelState } from "@/shared/types/channel-state";

export default defineComponent({
  setup() {
    const medkitInfo = ref<string>("");
    const channelState = ref<string>("");

    const { medkit } = useMEDKit();

    medkit.loaded().then(async () => {
      console.log("MEDKit is available");

      // User information is immediately available
      medkitInfo.value = JSON.stringify(
        {
          MEDKitAvailable: true,
          user: medkit.user,
        },
        undefined,
        2
      );

      // A snapshot of the channel state can be fetched at any point
      channelState.value = JSON.stringify(
        await medkit.getChannelState(),
        undefined,
        2
      );

      // A listener can be created which will automatically be called
      // when the broadcaster updates state
      medkit.listen("channel_state_update", (newState: ChannelState) => {
        channelState.value = JSON.stringify(newState, undefined, 2);
      });
    });

    return {
      medkitInfo,
      channelState,
    };
  },
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

h1 {
  font-family: Nunito, sans-serif;
  font-size: 2rem;
  text-align: center;
}

pre {
  width: 100%;
  overflow: auto;
}
</style>
