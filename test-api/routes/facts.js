const express = require('express');
const router = express.Router();

const animals = require('../mocks/response');

const randomItem = (items) => {
  return items.sort(() => 0.5 - Math.random())[0];
};

const response = (animal) => {
  return {
    name: animal.name,
    fact: randomItem(animal.facts),
    imgSrc: animal.image
  }
};

router.get('/fact', async (req, res) => {
  res.json(response(randomItem(animals)));
});

router.get('/fact/:animal', async (req, res) => {
  const animal = animals.find((animal) => {
    return animal.id === req.params.animal
  });

  if (!animal) {
    return res.sendStatus(404);
  }

  res.json(response(animal));
});

module.exports = router;
