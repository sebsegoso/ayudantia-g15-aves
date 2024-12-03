//  este archivo tendrá funciones que hacen llamados a la API
// https://aves.ninjas.cl/api/birds
// https://aves.ninjas.cl/api/birds/76-buteo-albigula

import axios from "axios";

const api = axios.create({
  baseURL: "https://aves.ninjas.cl/api/birds",
});

export const obtenerTodasLasAves = async () => {
  try {
    const response = await api.get("/");
    return response.data; /* data sería el arreglo de objetos con las aves */
  } catch (error) {
    console.error("Error al obtener todas las aves:", error);
  }
};

export const obtenerAvePorId = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener ave:", error);
  }
};
