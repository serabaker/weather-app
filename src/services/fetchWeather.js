import axios from "axios";

const URL = "http://api.weatherstack.com/current";
const API_KEY = "af6881f2d1cfd556f1a25929b15e756b";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      query: query,
      units: "f",
      access_key: API_KEY,
    },
  });
  return data;
};
