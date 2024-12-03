import { obtenerAvePorId, obtenerTodasLasAves } from "@/services/avesService";
import { createStore } from "vuex";

export default createStore({
  state: {
    aves: [],
  },
  getters: {},
  mutations: {
    // setee todas las aves
    setAves(state, payload) {
      state.aves = payload;
    },
  },
  actions: {
    // una acción que traiga todas las aves
    async fetchTodasLasAves(context) {
      const data = await obtenerTodasLasAves();
      if (data) {
        context.commit("setAves", data);
      }
    },
    // una acción que traiga una ave según su id
    async fetchAveDetalle(context, id) {
      const data = await obtenerAvePorId(id);
      return data;
    },
  },
  modules: {},
});
