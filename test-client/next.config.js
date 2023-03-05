require('dotenv').config();

const {
  API_HOST,
  FACTS_ENDPOINT
} = process.env;

module.exports = {
  images: {
    domains: ['localhost', 'api'],
  },
  env: {
    API_HOST,
    FACTS_ENDPOINT
  }
}