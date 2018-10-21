<template>
  <div class="overlay">
    <transition name="fade">
      <keep-alive>
        <motd v-if="controlsVisible" />
      </keep-alive>
    </transition>
  </div>
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

.overlay {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  position: absolute;
  bottom: 40px;
  left: 0;
}
</style>
