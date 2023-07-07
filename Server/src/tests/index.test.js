const request = require('supertest');
const express = require("express");
const app = require('../app')
// const agent = request(app)
const userInfo = require('../utils/users')

describe('GET /rickandmorty/character/:id', () => {
    test('Status 200', async () => {
        const response = await request(app)
        .get('/rickandmorty/character/1')
        expect(response.statusCode).toBe(200)
    })

    test('Responds object with properties: "id", "name", "species", "gender", "status", "origin", and "image"', async () => {
        const response = await request(app).get('/rickandmorty/character/1');
    
        const expectedProperties = ['id', 'name', 'species', 'gender', 'status', 'origin', 'image'];

        for (let property of expectedProperties) {
            expect(response.body).toHaveProperty(property);
        }
    });

    test('Status 500', async () => {
        const response = await request(app)
        .get('/rickandmorty/character/1000')
        expect(response.statusCode).toBe(500)
    })
    

})

describe('GET /rickandmorty/login', () => {
    test('Login Credentials', async () => {
        const object = {access: true}
        const response = await request(app)
        .get(`/rickandmorty/login?email=${encodeURIComponent(userInfo[0].email)}&password=${userInfo[0].password}`)
        expect(response.body).toEqual(object)
    })

    test('Wrong Login Credentials', async () => {
        const object = {access: false}
        const response = await request(app)
        .get(`/rickandmorty/login?email=wrongEmail&password=wrongPass`)
        expect(response.body).toEqual(object)
    })

})

describe('POST /rickandmorty/fav"', () => {
    test('Add fav Character', async () => {
        // Favorite data to be added
        const favorite = { name: 'Rick', id: 1 };

        const postResponse = await request(app)
        .post('/rickandmorty/fav')
        .send(favorite)
        expect(postResponse.body).toContainEqual(favorite)
    })

    test('Add fav Character without deleting previous ones', async () => {
        // Favorite data to be added
        const favorite = { name: 'Morty', id: 2 };

        const postResponse = await request(app)
        .post('/rickandmorty/fav')
        .send(favorite)

        expect(postResponse.body.length).toBe(2)
    })


})

describe('DELETE /rickandmorty/fav/:id', () => {
    test('Delete Character', async () => {
        const response = await request(app)
        .delete('/rickandmorty/fav/1')
        console.log(response.body)
        expect(response.body.length).toBe(1)
        
    })
})



