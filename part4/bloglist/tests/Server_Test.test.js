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

        expect(response.body).toHaveLength(7);
    })

})



afterAll(() => {
    mongoose.connection.close()
})