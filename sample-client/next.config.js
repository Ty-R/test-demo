require('dotenv').config();

const {
  API_HOST,
  FACTS_ENDPOINT
} = process.env;

module.exports = {
  images: {
    domains: ['dog.ceo'],
  },
  env: {
    API_HOST,
    FACTS_ENDPOINT
  }
}