import { app } from '../../app'
import { describe, expect, test } from '@jest/globals'
import supertest from "supertest"
import apiModel from './api.schema'

describe("Testing GET /apis endpoint", () => {

    test("Correct", async () => {
        const response = await supertest(app).get('/api/v1/apis')
        expect(response.status).toBe(200)
        expect(response.body.success).toBe(true)
        expect('data' in response.body).toBe(true)
        expect(typeof response.body.data).toBe("object")
    })

})

describe("Testing GET /api/:id endpoint", () => {

    test("Invalid Id", async () => {
        const response = await supertest(app).get('/api/v1/api/1')
        expect(response.status).toBe(404)
        expect(response.body.success).toBe(false)
        expect('error' in response.body).toBe(true)
        expect(response.body.error.message).toBe("Invalid id")
    })

    test("Valid Id", async () => {
        const response = await supertest(app).get('/api/v1/api/6391212f4bf14c4dd41c421e')
        expect(response.status).toBe(200)
        expect(response.body.success).toBe(true)
        expect('data' in response.body).toBe(true)
        expect(typeof response.body.data).toBe("object")
    })

})

describe("Testing POST /apis endpoint", () => {

    beforeAll(async () => {
        await apiModel.deleteOne({
            title: "Api Teste",
            version: "1.0.0",
            baseUrl: "http://apiteste.com"
        })
    })

    test.skip("Missing parameters", async () => {
        const response = await supertest(app).get('/api/v1/apis').send({
            "title": "Teste 23",
            "baseUrl": "http://hugocortez.com"
        })
        expect(response.status).toBe(406)
        expect(response.body.success).toBe(false)
        expect('error' in response.body).toBe(true)
        expect(response.body.error.message).toBe("Missing version")
    })

    test("Incorrect title formatting", async () => {
        const response = await supertest(app).post('/api/v1/apis').send({
            "title": "",
                "version": "1.0.0",
            "baseUrl": "http://hugocortez.com"
        })
        expect(response.status).toBe(406)
        expect(response.body.success).toBe(false)
        expect('error' in response.body).toBe(true)
        expect(response.body.error.message).toBe("Please enter a valid title")
    })

    test("Incorrect version formatting", async () => {
        const response = await supertest(app).post('/api/v1/apis').send({
            "title": "Api Teste",
                "version": "version 2",
            "baseUrl": "http://hugocortez.com"
        })
        expect(response.status).toBe(406)
        expect(response.body.success).toBe(false)
        expect('error' in response.body).toBe(true)
        expect(response.body.error.message).toBe("Please enter a valid version")
    })

    test("Incorrect baseUrl formatting", async () => {
        const response = await supertest(app).post('/api/v1/apis').send({
            "title": "Api Teste",
                "version": "1.0.0",
            "baseUrl": "hugocortez.com"
        })
        expect(response.status).toBe(406)
        expect(response.body.success).toBe(false)
        expect('error' in response.body).toBe(true)
        expect(response.body.error.message).toBe("Please enter a valid base URL")
    })

    test("Create correct api", async () => {
        const response = await supertest(app).post('/api/v1/apis').send({
            "title": "Api Teste",
            "version": "1.0.0",
            "baseUrl": "http://apiteste.com"
        })
        expect(response.status).toBe(201)
        expect(response.body.success).toBe(true)
        expect('data' in response.body).toBe(true)
        expect(typeof response.body.data).toBe("object")
    })

    test("Create duplicated api", async () => {
        const response = await supertest(app).post('/api/v1/apis').send({
            "title": "Api Teste",
            "version": "1.0.0",
            "baseUrl": "http://apiteste.com"
        })
        expect(response.status).toBe(409)
        expect(response.body.success).toBe(false)
        expect('error' in response.body).toBe(true)
        expect(response.body.error.message).toBe("Already exist an api with this title and version")
    })

})
