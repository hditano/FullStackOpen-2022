import axios from 'axios'

  const URI = "http://localhost:3001";

  const getBlogs = async() => {
    const blog = await axios.get(`${URI}/api/blog`);
    return blog.data
  }

export default {getBlogs}
