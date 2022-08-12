const dummy = (blogs) => {
    return blogs.length;
  }
  
const totalLikes = (blogs) => {
    return blogs.map(ele => ele.likes)
                .reduce((accValue, currValue) =>  {
                    accValue + currValue});
}

const favoriteBlog = (blog) => {
    let maxVotes = Math.max(...blog.map(ele => ele.likes));
    let object = blog.find(ele => ele.likes === maxVotes);
    return object;
}

const mostBlogs = (blog) => {
    return console.log('test');
}

  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
  }
