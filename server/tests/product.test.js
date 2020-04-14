const request = require('supertest');
const app = require('../server');

describe('Product routes', () => {
  describe('Get /products', () => {
    it('Valid request', (done) => {
      request(app)
        .get('/products')
        .then(response => {
          let { status, body } = response
          expect(status).toBe(200)
          done()
        })
    })
  })

  describe('Post /products',()=>{
    it('Valid request',()=>{
      request(app)
        .post('/products')
        
    })
  })
})