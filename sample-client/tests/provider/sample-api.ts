import path from 'path';
import { name } from '../../package.json';
import communications from '../../communications/sample-api'
import {
  PactV3,
  SpecificationVersion,
  MatchersV3,
} from '@pact-foundation/pact';

const { like } = MatchersV3;

const port = process.env.PACT_MOCK_SERVER_PORT as string;

const provider = new PactV3({
  consumer: name,
  provider: 'sample-api',
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  logLevel: 'DEBUG',
  dir: path.resolve(process.cwd(), 'pacts'),
  spec: SpecificationVersion.SPECIFICATION_VERSION_V2,
  pactFileWriteMode: 'overwrite',
  port: port,
});

describe('Sample API Pacts', () => {
  test('valid request', async () => {
    provider.addInteraction({
      states: [],
      uponReceiving: 'fact request',
      withRequest: {
        method: 'GET',
        path: '/fact',
      },
      willRespondWith: {
        status: 200,
        body: {
          name: like(''),
          fact: like(''),
          imgSrc: like(''),
          wiki: like('')
        },
      },
    });

    await provider.executeTest(async () => {
      const response = await communications();

      expect(response).toStrictEqual({
        name: '',
        fact: '',
        imgSrc: '',
        wiki: ''
      });
    });
  });
});
