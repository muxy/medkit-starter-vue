<template>
  <transition name="fade">
    <keep-alive>
      <motd v-if="controlsVisible" />
    </keep-alive>
  </transition>
</template>

<script>
import Motd from 'shared/components/Motd';

export default {
  components: { Motd },

  data: () => ({
    controlsVisible: true
  }),

  mounted() {
    window.Twitch.ext.onContext(({ arePlayerControlsVisible }) => {
      this.controlsVisible = arePlayerControlsVisible;
    });
  }
}
</script>

<style lang="scss">
@import '~shared/scss/base';
</style>
