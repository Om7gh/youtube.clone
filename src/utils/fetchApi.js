import axios from "axios";

const URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "dc6c824874msh23c61908a44d6edp1bd10ajsn2e52e5341bea",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${URL}/${url}`, options);

  return data;
};
