import axios from 'axios'

  const URI = "http://localhost:3001";

  let token = null

  const getBlogs = async() => {
    const blog = await axios.get(`${URI}/api/blog`);
    return blog.data
  }

  const createBlog = async (newBlog) => {
  
    const config = {
      headers: {Authorization: token},
    }

    const blog = await axios.post(`${URI}/api/blog`, newBlog, config)
    console.log(blog);
  }

  const userLogin = async (credentials) => {
    const response = await axios.post(`${URI}/api/login`,credentials);
    return response;
  }

  const logOut = () => {
    console.log(token);
    token = '';
    localStorage.removeItem('username');
  } 

  const setToken = (newToken) => {
    token = `bearer ${newToken.token}`;
  }

  const logger = (value) => {
    console.log(value.token);
  }


export default  {
  getBlogs,
  userLogin,
  setToken,
  logOut,
  logger,
  createBlog
}
