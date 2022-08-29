import Axios from 'axios';

const baseURL = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await Axios.get(baseURL);
  return response.data
}

const postNote = async (content) => {
  const object = { content };
  const response = await Axios.post(baseURL, object);
  return response.data
}


export default { getAll, postNote };
