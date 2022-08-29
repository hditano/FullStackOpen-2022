import Axios from 'axios';

const baseURL = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await Axios.get(baseURL);
  return response.data
}


export default { getAll };
