import factModel from './animal-facts.model';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongod: any;

describe('Fact schema', () => {
  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    await mongoose.connect(mongod.getUri() as string);
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
  })

  afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
  });

  describe('Facts', () => {
    test.each`
      scenario          | fact
      ${'empty'}        | ${''}
      ${'undefined'}    | ${undefined}
      ${'> 255 chars'}  | ${['a'.repeat(256)]}
    `(
      'Throws a validation error when fact is $scenario',
      async ({ fact }: any) => {
        const insert = new factModel({ fact });

        try {
          await insert.save();
          throw new Error('Invalid input accepted');
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
        }
      }
    );
  });
});
