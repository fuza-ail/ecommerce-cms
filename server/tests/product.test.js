const request = require('supertest');
const app = require('../server');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// const {Admin,Product} = require('../models');
const db = require('sequelize')

let admin = {
  id: 1,
  email: 'admin@gmail.com',
  password: process.env.ADMIN_PASSWORD
}

let token = {
  valid: jwt.sign({
    UserId: admin.id,
    UserEmail: admin.email
  }, process.env.TOKEN_KEY)
}

let products = [
  {
    name: 'name',
    image_url: 'image',
    price: 100,
    stock: 100,
    category: 'category',
    description: 'description'
  },
  {
    name: '',
    image_url: '',
    price: null,
    stock: null,
    category: 'category',
    description: 'description'
  }
];

// beforeAll(()=>{

// })

// afterAll(()=>{
//   return queryInterface.bulkDelete('Product', null, {})
// })

describe('Product routes', () => {
  describe('Get /products', () => {
    it('Valid request', (done) => {
      return request(app)
        .get('/products')
        .then(response => {
          let { status, body } = response
          expect(status).toBe(200)
          done()
        })
    })
  })

  describe('Post /products', () => {
    it('Valid token', (done) => {
      return request(app)
        .post('/products')
        .set('access_token', token.valid)
        .send(products[0])
        .then(response => {
          let { status, body } = response
          expect(status).toBe(201)
          done()
        })
    })
    // problem here
    it('Invalid token', (done) => {
      return request(app)
        .post('/products')
        .set('access_token', 'notvalidtoken')
        .send(products[0])
        .then(response => {
          let { status, body } = response
          expect(status).toBe(401)
          done()
        })
    })

    it('Token not found', (done) => {
      return request(app)
        .post('/products')
        .send(products[0])
        .then(response => {
          let { status, body } = response
          expect(status).toBe(404)
          done()
        })
    })
  })

  describe('Delete /products/:id', () => {
    it('Success delete', (done) => {
      return request(app)
        .delete('/products/9')
        .set('access_token', token.valid)
        .then(response => {
          let { status, body } = response
          expect(status).toBe(200)
          done()
        })
    })

    it('Product not found', (done) => {
      return request(app)
        .delete('/products/1000')
        .set('access_token', token.valid)
        .then(response => {
          let { status, body } = response
          expect(status).toBe(404)
          done()
        })
    })

    // problem here
    it('Invalid token', (done) => {
      return request(app)
        .delete('/products/2')
        .set('access_token', 'notvalidtoken')
        .then(response => {
          let { status, body } = response
          expect(status).toBe(401)
          done()
        })
    })

    it('Token not found', (done) => {
      return request(app)
        .delete('/products/2')
        .then(response => {
          let { status, body } = response
          expect(status).toBe(404)
          done()
        })
    })

    it('Not Authorized', (done) => {
      return request(app)
        .delete('/products/3')
        .set('access_token', token.valid)
        .then(response => {
          let { status, body } = response
          expect(status).toBe(403)
          done()
        })
    })
  })

  describe('Put /products/:id', () => {
    it('Success delete', (done) => {
      return request(app)
        .delete('/products/5')
        .set('access_token', token.valid)
        .send(products[0])
        .then(response => {
          let { status, body } = response
          expect(status).toBe(200)
          done()
        })
    })

    it('Product not found', (done) => {
      return request(app)
        .delete('/products/1000')
        .set('access_token', token.valid)
        .send(products[0])
        .then(response => {
          let { status, body } = response
          expect(status).toBe(404)
          done()
        })
    })
    // problem here
    it('Invalid token', (done) => {
      return request(app)
        .delete('/products/4')
        .set('access_token', 'notvalidtoken')
        .send(products[0])
        .then(response => {
          let { status, body } = response
          expect(status).toBe(401)
          done()
        })
    })

    it('Token not found', (done) => {
      return request(app)
        .delete('/products/2')
        .send(products[0])
        .then(response => {
          let { status, body } = response
          expect(status).toBe(404)
          done()
        })
    })

    it('Not Authorized', (done) => {
      return request(app)
        .delete('/products/3')
        .set('access_token', token.valid)
        .send(products[0])
        .then(response => {
          let { status, body } = response
          expect(status).toBe(403)
          done()
        })
    })
  })
})