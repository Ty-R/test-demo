require('dotenv').config();

const {
  HOST,
  PORT
} = process.env;

module.exports = [
  {
    id: 'dog',
    name: 'Dog (Canis familiaris)',
    facts: [
      'Real Dog Fact 1',
      'Real Dog Fact 2',
      'Real Dog Fact 3',
      'Real Dog Fact 4',
      'Real Dog Fact 5'
    ],
    image: `${HOST}:${PORT}/dog.jpg`
  },
  {
    id: 'cat',
    name: 'Cat (Felis catus)',
    facts: [
      'Real Cat Fact 1',
      'Real Cat Fact 2',
      'Real Cat Fact 3',
      'Real Cat Fact 4',
      'Real Cat Fact 5'
    ],
    image: `${HOST}:${PORT}/cat.jpg`
  }
];
