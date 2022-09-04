import {useState} from 'react';

function CreateForm({handleBlog}) {

  const newBlog = {
    title: '',
    author: '',
    url: '',
    likes: '',
  }

  const [blog, setBlog] = useState(newBlog);


  const handleInput = (e) => {
    e.preventDefault();
    const {name, value} = e.target;

    setBlog({
      ...blog,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBlog(blog)
  }


  return (
    <>
      <h3>Create New Blog</h3>
    <form id="form" onSubmit={handleSubmit}>
      <span>Title:  </span>
      <input id="title" type='text' name='title' value={blog.title} onChange={handleInput} />
      <br></br>
      <span>Author: </span>
      <input id="author" type="text" name='author' value={blog.author} onChange={handleInput}/>
      <br></br>
      <span>Url: </span>
      <input id="url" type='text' name='url' value={blog.url} onChange={handleInput}/>
      <br></br>
      <button id="button" type='submit'>Create</button>
    </form>
    </>
  )
}

export default CreateForm;
