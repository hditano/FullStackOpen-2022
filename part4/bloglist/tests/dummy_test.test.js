const listHelper = require('../utils/list_helper');

test('dummy returns one', () => {
    const blogs = [1]

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})


describe('total likes', () => {

    const listWithOneBlog = [{
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
    }]



    test('total sum of all likes', () => {

        const result = listHelper.totalLikes(listWithOneBlog);
        expect(result).toBe(5);
    })
})