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
      console.log("no deberian venir las propiedades", payload);
      state.aves = payload;
    },
  },
  actions: {
    // una acción que traiga todas las aves
    async fetchTodasLasAves(context) {
      const data = await obtenerTodasLasAves();
      if (data) {
        const updatedData = data.map((ave) => {
          delete ave._links
          delete ave.sort
          return ave;
        });
        context.commit("setAves", updatedData);
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
