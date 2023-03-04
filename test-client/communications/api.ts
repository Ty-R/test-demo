import axios from 'axios';
axios.defaults.baseURL = process.env.API_HOST as string;

export default async function () {
  const response = await axios.get(process.env.FACTS_ENDPOINT as string);
  return response.data as object;
}
