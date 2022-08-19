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
    let authorLikes = blog.reduce((op, {author, likes}) => {
        op[author] = op[author] || 0
        op[author] += likes
        return op
      },{})

    let result = Object.values(authorLikes).forEach(ele => ele);

    return console.log(typeof(result));
}

  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
  }
