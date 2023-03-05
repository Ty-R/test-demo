const server = require('../app.js');
const request = require('supertest');

test('A request to an unknown endpoint', async () => {
  const response = await request(server).get('/not-a-real-endpoint');
  expect(response.status).toEqual(404);
});

test('A fact request for an unknown animal', async () => {
  const response = await request(server).get('/fact/alien');
  expect(response.status).toEqual(404);
});

describe('A random fact request', () => {
  let response;

  beforeAll(async () => {
    response = await request(server).get('/fact');
  });

  it('responds with a 200 status code', () => {
    expect(response.status).toEqual(200);
  });

  it('responds with an animal name', () => {
    expect(response.body).toHaveProperty('name');
  });

  it('responds with an animal fact', () => {
    expect(response.body).toHaveProperty('fact');
  });

  it('responds with an animal image', () => {
    expect(response.body).toHaveProperty('imgSrc');
  });
});

describe('A random fact request for a specific animal', () => {
  let response;

  beforeAll(async () => {
    response = await request(server).get('/fact/cat');
  });

  it('responds with a 200 status code', () => {
    expect(response.status).toEqual(200);
  });

  it('responds with an animal name', () => {
    expect(response.body).toHaveProperty('name');
  });

  it('responds with an animal fact', () => {
    expect(response.body).toHaveProperty('fact');
  });

  it('responds with an animal image', () => {
    expect(response.body).toHaveProperty('imgSrc');
  });
});
