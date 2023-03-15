import server from '../app';
import factModel from '../database/animal-facts.model';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongod: any;

describe('Fact service', () => {
  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    await mongoose.connect(mongod.getUri() as string);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
  });

  test('A 404 is returned when a request is made to an unknown endpoint', async () => {
    const response = await request(server).get('/not-a-real-endpoint');
    expect(response.status).toEqual(404);
  });
  
  test('An empty array is returned when no facts are found', async () => {
    const response = await request(server).get('/facts')
    expect(response.body).toEqual([]);
  });

  test('An empty array is returned when no facts are found with ?count=', async () => {
    const response = await request(server).get('/facts?count=5')
    expect(response.body).toEqual([]);
  });

  test('A negative ?count= is ignored', async () => {
    const response = await request(server).get('/facts?count=-1')
    expect(response.body).toEqual([]);
  });

  test('A non-int ?count= is ignored', async () => {
    const response = await request(server).get('/facts?count=a')
    expect(response.body).toEqual([]);
  });

  test('All facts returned when ?count= is undefined', async () => {
    await factModel.insertMany([
      { fact: 'Fact 1' },
      { fact: 'Fact 2' },
      { fact: 'Fact 3' },
      { fact: 'Fact 4' },
      { fact: 'Fact 5' }
    ]);

    const response = await request(server).get('/facts');
    expect(response.body.length).toEqual(5);
  });

  test('Limited facts returned when ?count= is defined', async () => {
    await factModel.insertMany([
      { fact: 'Fact 1' },
      { fact: 'Fact 2' },
      { fact: 'Fact 3' },
      { fact: 'Fact 4' },
      { fact: 'Fact 5' }
    ]);

    const response = await request(server).get('/facts?count=2');
    expect(response.body.length).toEqual(2);
  });

  test('Returns all facts when ?count= is greater than total facts', async () => {
    await factModel.insertMany([
      { fact: 'Fact 1' },
      { fact: 'Fact 2' },
    ]);

    const response = await request(server).get('/facts?count=5');
    expect(response.body.length).toEqual(2);
  });

  describe('Inserting animal facts', () => {
    test('Valid request inserts a document', async () => {
      await request(server)
        .post('/facts/create')
        .send([{ fact: 'my new fact' }]);

      const document = await factModel.findOne();

      expect(document?.fact).toEqual('my new fact');
    });

    test('Invalid request returns a 400', async () => {
      const response = await request(server)
        .post('/facts/create')
        .send([{}]);

      expect(response.status).toEqual(400);
    });

    test('Unknown fields are not entered into a document', async () => {
      await request(server)
        .post('/facts/create')
        .send([{ fact: 'my new fact', foo: 'bar' }]);
      
      const document = await factModel.findOne();

      expect(document).not.toHaveProperty('foo');
    });
  });
});
