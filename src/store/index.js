import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false,
  },
  getters: {
  },
  mutations: {
    setLoading(state, isLoading) {
      state.loading = isLoading;
    },
  },
  actions: {
  },
  modules: {
  }
})
