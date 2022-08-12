const dummy = (blogs) => {
    return blogs.length;
  }
  
const totalLikes = (blogs) => {
    return blogs.map(ele => ele.likes)
                .reduce((accValue, currValue) =>  {
                    accValue + currValue});
}

  module.exports = {
    dummy,
    totalLikes
  }
