import axios from 'axios'

  const URI = "http://localhost:3001";

  const getBlogs = async() => {
    const blog = await axios.get(`${URI}/api/blog`);
    return blog.data
  }

  const userLogin = async (credentials) => {
    const response = await axios.post(`${URI}/api/login`,credentials);
    return response;
}

export default  {
  getBlogs,
  userLogin
}
