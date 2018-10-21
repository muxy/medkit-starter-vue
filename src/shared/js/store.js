export default {
  state: {
    motd: ''
  },

  mutations: {
    setMotd(state, motd) {
      state.motd = motd;
    }
  }
};