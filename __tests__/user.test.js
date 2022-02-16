const request = require('supertest')
const app = require('../app')

describe('Sign Up', () => {
    it("Create new user", async () => {
        const res = await request(app)
            .post('/users/signup')
            .send({
                "firstname": "test",
                "lastname": "user",
                "phone": "09067854998",
                "email": "testuser@example.com",
                "password": "12345678"
            })
        expect(res.status).toEqual(201)
        expect(res.body).toHaveProperty('data')
        expect(1).toBe(1)
        expect(res.body.data.user.email).toEqual('testuser@example.com')        
    })
})