import express from 'express';
import factsModel from '../database/animal-facts.model';

const router = express.Router();

const facts = async (count: any) => {
  const int = parseInt(count);

  if (int && int >= 0) {
    return factsModel.aggregate().sample(parseInt(count));
  } else {
    return factsModel.find();
  }
};

router.get('/facts', async (req, res) => {
  const response = await facts(req.query.count);
  return res.json(response.map((fact) => fact.fact));
});

router.post('/facts/create', async (req, res) => {
  factsModel.insertMany(req.body).then(() => {
    return res.json({ status: 'saved' });
  }).catch(() => {
    return res.sendStatus(400);
  });
});

export default router;
