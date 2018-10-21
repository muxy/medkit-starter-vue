<template>
  <div class="config" :class="theme">
    <h2>No configuration needed.</h2>
    <h4>You can set the current Message of the Day from the Extensions section of the Twitch Live Dashboard.</h4>
  </div>
</template>

<script>
export default {
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

.config {
  background-color: #fff;
  color: #232127;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.dark {
    background-color: #201c2b;
    color: #e5e3e8;
  }

  h2 {
    padding: 0 20px;
    text-align: center;
    text-transform: uppercase;
  }

  h4 {
    padding: 0 20px;
    text-align: center;
  }
}
</style>
