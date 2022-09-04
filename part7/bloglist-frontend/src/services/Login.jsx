import axios from 'axios'

const URI = "http://localhost:3001";

let token = '';

const setToken = (newToken) => {
  token = `bearer ${newToken.token}`;
}

const getBlogs = async () => {
  const blog = await axios.get(`${URI}/api/blog`);
  return blog.data;
}

const createBlog = async (newBlog) => {

  const config = {
    headers: { Authorization: token },
  }

  const blog = await axios.post(`${URI}/api/blog`, newBlog, config)
}

const updateBlog = async (blog) => {


  const config = {
    headers: { Authorization: token },
  }


  const response = await axios.put(`${URI}/api/blog/${blog.id}`, { likes: blog.likes }, config);

}

// be sure to name headers!!
const removeBlog = async (blog) => {
  const config = {
    headers: { Authorization: token },
  }

  console.log(blog.id);

  const response = await axios.delete(`${URI}/api/blog/${blog.id}`, config);
}


const userLogin = async (credentials) => {
  const response = await axios.post(`${URI}/api/login`, credentials);
  return response;
}

const logOut = () => {
  token = '';
  localStorage.removeItem('username');
}

const logger = (value) => {
  console.log(value.token);
}


export default {
  getBlogs,
  updateBlog,
  userLogin,
  removeBlog,
  setToken,
  logOut,
  logger,
  createBlog
}
