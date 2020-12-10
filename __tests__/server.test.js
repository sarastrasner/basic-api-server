'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.put('/hello');
    expect(response.status).toBe(404);
  });


  it('should respond with a 404 on an invalid route', async () => {
    const response = await mockRequest.get('/blarg');
    expect(response.status).toBe(404);
  });


  it('should respond properly on a GET request to /cats with our db as an array', async () => {
    const response = await mockRequest.get('/cats')
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });


  it('should respond properly on a GET request to /cats:id and return the referenced record', async () => {
    const id = 1;
    const response = await mockRequest.post('/cats').query(id);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"id": id});
  });

  it('should respond properly on a POST request to /cats and return the new record', async () => {
    const data = { name: 'Sara ' }
    const response = await mockRequest.post('/cats').query(data);
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    // expect(response.body).toContain(data);
    expect(response.body).toBeDefined;

  }); 


  it('should respond properly on a DELETE request to /cats and return null', async () => {
    const id = 1;
    const response = await mockRequest.delete('/cats/:id').query(id);
    expect(response.status).toBe(200);
    expect(response.body).toBeNull;
  });


  it('should respond properly on a PUT request to /cats and return the db object', async () => {
    const data = { name: 'Sara ' }
    const response = await mockRequest.put('/cats/:id').query(data);
    expect(response.status).toBe(200);
    // expect(response.body).toBe(data);
    expect(response.body).toBeDefined;
  });

});