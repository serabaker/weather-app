import axios from "axios";

const URL = "https://api.unsplash.com/search/photos";
const API_KEY = "cDL109Utx_KgSL4sllx8BzuCl94762TPJNCUMXzItyc";

export const fetchPhotos = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      query: query,
      client_id: API_KEY,
    },
  });
  return data;
};
