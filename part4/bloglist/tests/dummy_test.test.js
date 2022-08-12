const listHelper = require('../utils/list_helper');

test('dummy returns one', () => {
    const blogs = [1]

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})


const listWithOneBlog = [
    {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
    },
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 10,
        __v: 0
    }

]


describe('total likes', () => {

    test('total sum of all likes', () => {

        const result = listHelper.totalLikes(listWithOneBlog);
        expect(listWithOneBlog).toBe(listWithOneBlog);
    })
})


describe('blogs testing', () => {

    test('returns which blog has the most likes', () => {
        const result = listHelper.favoriteBlog(listWithOneBlog);
        expect(listWithOneBlog).toEqual(listWithOneBlog);
    })

})