<template>
  <div class="motd">
    <label>Message of the day:</label>
    {{ motd }}
  </div>
</template>

<script>
export default {
  computed: {
    motd() {
      return this.$store.state.motd;
    }
  },

  created() {
    this.$medkit.loaded()
      .then(() => this.$medkit.getAllState())
      .then(state => {
        if (state.channel.motd) {
          this.$store.commit('setMotd', state.channel.motd);
        }

        this.$medkit.listen('motd', msg => {
          this.$store.commit('setMotd', msg.motd);
        });
      });
  }
};
</script>

<style lang="scss" scoped>
.motd {
  padding: 10px;

  label {
    font-weight: bold;
  }
}
</style>
