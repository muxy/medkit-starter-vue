<template>
  <div class="create">
    <label>Message of the Day</label>
    <input v-model.trim="motd" />

    <button :disabled="!dirty" @click="setMotd">Set MOTD</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    motd: ''
  }),

  computed: {
    dirty() {
      return this.motd.length > 0 &&
        this.motd !== this.$store.state.motd;
    }
  },

  created() {
    this.$medkit.loaded()
      .then(() => this.$medkit.getAllState())
      .then(state => {
        this.motd = state.channel.motd || '';
        this.$store.commit('setMotd', this.motd);
      });
  },

  methods: {
    setMotd() {
      const oldMotd = this.$store.state.motd;
      this.$store.commit('setMotd', this.motd);

      this.$medkit.setChannelState({
        motd: this.motd
      }).then(() => {
        this.$medkit.send('motd', {
          motd: this.motd
        });
      }).catch(err => {
        this.$store.commit('setMotd', oldMotd);
        console.error(err);
      });
    }
  }
}
</script>

<style lang="scss">
@import '~shared/scss/base';

.create {
  label {
    display: block;
    font-size: 12px;
    padding-bottom: 2px;
    position: relative;
    text-align: left;
    user-select: none;
  }

  input {
    display: block;
    padding: 5px;
    width: calc(100% - 12px);

    border: 1px solid #c4c4c4;
    font-family: inherit;
    font-size: 12px;
 }

  button {
    cursor: pointer;
    height: 30px;
    margin-top: 10px;

    &:disabled {
      cursor: default;
    }
  }
}
</style>
