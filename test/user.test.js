/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const newUser = {
  firstName: 'nameTest',
  lastName: 'lastnameTest',
  email: 'test@wolox.com',
  password: '12345678'
};

describe('POST /register', () => {
  const shortPassword = {
    firstName: 'nameTest',
    lastName: 'lastnameTest',
    email: 'test2@wolox.com',
    password: '1234'
  };
  const nofirstName = {
    lastName: 'lastnameTest',
    email: 'test@wolox.com',
    password: '12345678'
  };

  test('should respond with a 201 status code', done => {
    request(app)
      .post('/register')
      .send(newUser)
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
      })
      .catch(err => err);

    // should respond with status code 400
    request(app)
      .post('/register')
      .send(newUser)
      .then(response => {
        expect(response.body.message).toEqual('User´s email already exists');
        expect(response.statusCode).toBe(400);
        done();
      });
  });

  test('should respond with a 422 status code when the password is too short', done => {
    request(app)
      .post('/register')
      .send(shortPassword)
      .then(response => {
        expect(response.body.message.errors[0].msg).toEqual('Password must contain at least 8 characters');
        expect(response.statusCode).toBe(422);
        done();
      })
      .catch(err => err);
  });

  test('should respond with a 422 status code when some field is empty', done => {
    request(app)
      .post('/register')
      .send(nofirstName)
      .then(response => {
        expect(response.body.message.errors[0].msg).toEqual('The firstname cannot be empty');
        expect(response.statusCode).toBe(422);
        done();
      })
      .catch(err => err);
  });
});

describe('POST /login', () => {
  const user = {
    email: 'test@wolox.com',
    password: '12345678'
  };
  const failUser = {
    email: 'test@wolox.com',
    password: '12345678'
  };

  test('should respond with status code 200 and one token', done => {
    request(app)
      .post('/register')
      .send(newUser)
      .then(done());

    request(app)
      .post('/login')
      .send(user)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(Boolean(response[token])).toBe(true);
        done();
      });
  });

  request(app)
    .post('/login')
    .send(failUser)
    .then(response => {
      expect(response.body.message).toEqual('sign in failure. The user or password are invalid');
      expect(response.statusCode).toBe(422);
      done();
    })
    .catch(err => err);
});
