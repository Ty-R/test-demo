import axios from 'axios';
axios.defaults.baseURL = process.env.API_HOST as string;

export default async function (params?: { count?: number }) {
  const endpoint = process.env.FACTS_ENDPOINT as string;
  const response = await axios.get(endpoint, {
    params
  });

  return response.data as object;
}
