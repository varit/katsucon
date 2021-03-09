import api from "./api-config";

export const getAllFavorites = async () => {
  const resp = await api.get("/favorites");
  return resp.data;
}