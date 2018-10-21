<template>
  <div class="container">
    <h1>Admin Interface</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    secretState: {}
  }),

  created() {
    this.$medkit.loaded().then(() => {
      this.$medkit.getExtensionSecretState().then(state => {
        this.secretState = state;
      });
    });
  }
}
</script>

<style lang="scss">
@import '~shared/scss/base';
</style>
