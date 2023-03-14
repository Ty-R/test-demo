import express from 'express';
import factsModel from '../database/animal-facts.model';

const router = express.Router();

router.get('/facts', async (_req, res) => {
  const facts = await factsModel.aggregate().sample(3);
  return res.json(facts.map((fact) => fact.fact));
});

router.post('/facts/create', async (req, res) => {
  factsModel.insertMany(req.body).then(() => {
    return res.json({ status: 'saved' });
  }).catch(() => {
    return res.sendStatus(400);
  });
});

export default router;
