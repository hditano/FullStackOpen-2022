const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')

const api = supertest(app)

describe('HTTP GET API Request Test', () =>    {

    test('blog returns 200 OK', async () => {
        const response = await api.get('/api/blog');

        expect(response.statusCode).toBe(200);

    })

    test('expect returns on how many items are on the API', async () => {
        const response = await api.get('/api/blog');


        expect(response.body).toHaveLength(response.length);
    })

})

describe('HTTP POST API Request Tests', () => {

    test('Make a post successfully', async () => {
        const response = await api.post('/api/blog').send({title: 'Star Wars', author: 'Hernan', url: 'www.google.com', likes: 22});

        expect(response.statusCode).toBe(201)
    })

    test('Verifies if likes property is missing', async () => {
        const res =  await api.post('/api/blog').send({title: 'Star Wars', author: 'Hernan', url: 'www.google.com'});

        expect(res.body).not.toHaveProperty('likes')
    })
})



afterAll(() => {
    mongoose.connection.close()
})