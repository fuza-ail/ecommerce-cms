const request = require('supertest');
const app = require('../server');

describe('Admin routes',()=>{
  describe('Post /admin/login',()=>{
    it('Valid login',(done)=>{
      request(app)
        .post('/admin/login')
        .send({email: 'admin@gmail.com', password:'rahasia'})
        .then(response=>{
          let {status, body} = response
          expect(status).toBe(200)
          done()
        })
    })
    
    // test('Invalid login, empty field',()=>{
    //   request(app)
    //     .post('/admin/login')
    //     .send({email: '', password: ''})
    //     .then(response=>{
    //       let {status, body} = response;
    //       expect(status).toBe(400)
    //     })
    // })

    it('Invalid login, email not found',(done)=>{
      request(app)
        .post('/admin/login')
        .send({email:'admin2@gmail.com', password: 'rahasia'})
        .then(response=>{
          let {status,body} = response
          expect(status).toBe(404)
          done()
        })
    })

    it('Invalid login, wrong password',(done)=>{
      request(app)
        .post('/admin/login')
        .send({email:'admin@gmail.com', password: 'rasia'})
        .then(response=>{
          let {status,body} = response
          expect(status).toBe(401)
          done()
        })
    })
  })
})