<template>
  <div class="live" :class="theme">
    <create-motd />
  </div>
</template>

<script>
import CreateMotd from './components/CreateMotd.vue';

export default {
  components: { CreateMotd },

  data: () => ({
    theme: 'light'
  }),

  created() {
    window.Twitch.ext.onContext(({ theme }) => {
      this.theme = theme;
    });
  }
}
</script>

<style lang="scss">
@import '~shared/scss/base';

.live {
  padding: 10px;

  &.dark {
    background-color: #999;
  }
}
</style>
