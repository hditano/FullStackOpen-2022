const mongoose = require('mongoose')
const supertest = require('supertest')
const { app, server} = require('../index')

const api = supertest(app)

describe('HTTP GET API Request Test', () =>    {

    test('blog returns 200 OK', async () => {
        const response = await api.get('/api/blog');

        expect(response.statusCode).toBe(200);

    })

    test('expects to get an existing id', async () => {
        const response = await api.get('/api/blog')

        const contents = response.body.map(ele => ele._id);

        expect(contents).toContain("62f97890b86b67d74b36bd65");
    })

    test('expects to get Length of getAll', async () => {
        const response = await api.get('/api/blog')

        const content = response.body.map(ele => ele);

        expect(content.length).toBe(9)
    })

})

describe('HTTP POST API Request Tests', () => {

    test.skip('Make a post successfully', async () => {
        const response = await api.post('/api/blog').send({title: 'Star Wars', author: 'Hernan', url: 'www.google.com', likes: 22, userId: "62f98810a2d6bdbd83589956"});

        expect(response.statusCode).toBe(201)
    })

    test.skip('Verifies if likes property is missing', async () => {
        const res =  await api.post('/api/blog').send({title: 'Star Wars', author: 'Hernan', url: 'www.google.com'});

        expect(res.body).toHaveProperty(author)
    })
})



afterAll(() => {
    mongoose.connection.close();
    server.close()
})