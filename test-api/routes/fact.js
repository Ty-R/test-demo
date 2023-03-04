const axios = require('axios');
const express = require('express');
const router = express.Router();

const animals = require('../mocks/response.json');

require('dotenv').config();

const {
  DOG_API
} = process.env;

const randomItem = (items) => {
  return items.sort(() => 0.5 - Math.random())[0];
};

const fetchImage = async () => {
  const response = await axios.get(DOG_API);
  return response.data.message;
};

router.get('/fact', async (req, res, next) => {
  const animal = randomItem(animals);
  res.json({
    name: animal.name,
    fact: randomItem(animal.facts),
    imgSrc: await fetchImage()
  });
});

module.exports = router;
