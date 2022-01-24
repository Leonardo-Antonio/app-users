import { BASE_API } from "../constants/config";

export const peopleService = {
  getAll: async () => {
    const response = await fetch(`${BASE_API}/people`);
    return await response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${BASE_API}/people/${id}`);
    return await response.json();
  },
};
