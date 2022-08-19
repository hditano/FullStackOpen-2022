const listHelper = require('../utils/list_helper');
const blogs = require('../utils/made_blogs');

test('dummy returns one', () => {
    const blogs = [1]

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})


describe('total likes', () => {

    test('total sum of all likes', () => {

        const result = listHelper.totalLikes(blogs);
        expect(blogs).toBe(blogs);
    })
})


describe('blogs testing', () => {

    test('returns which blog has the most likes', () => {

        const toEqual = {
            _id: '5a422b3a1b54a676234d17f9',
            title: 'Canonical string reduction',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
            likes: 12,
            __v: 0
                        }


        const result = listHelper.favoriteBlog(blogs);
        expect(result).toEqual(toEqual);
    })

    test('returns the author who has the largest amount of blogs', () => {
        
        expect(listHelper.mostBlogs(blogs)).toBe("Edsger W. Dijkstra")
    })

})
