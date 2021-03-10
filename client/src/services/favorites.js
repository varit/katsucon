import api from "./api-config";

export const getAllFavorites = async () => {
  const resp = await api.get("/favorites");
  return resp.data;
}

export const getFavorite = async () => {
  const resp = await api.get(`/favorites/${id}`);
  return resp.data;
}

export const postFavorite = async (favoriteData) => {
  const resp = await api.post("/favorites", { favorite: favoriteData });
  return resp.data
}

export const putFavorite = async (id, favoriteData) => {
  const resp = await api.put(`/favorites/${id}`, { favorite: favoriteData});
  return resp.data;
}

export const detroyFavorite = async (id) => {
  const resp = await api.delete(`/favorites/${id}`);
  return resp;
}