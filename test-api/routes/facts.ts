import express from 'express';
import factsModel from '../database/animal-facts.model';

const router = express.Router();

router.get('/facts', async (_req, res) => {
  const facts = await factsModel.aggregate().sample(3);
  return res.json(facts.map((fact) => fact.fact));
});

router.post('/fact/create', async (req, res) => {
  const insert = new factsModel(req.body);

  insert.save().then(() => {
    return res.json({ status: 'saved' });
  }).catch((err: any) => {
    return res.sendStatus(400);
  });
});

router.post('/facts/create', async (req, res) => {
  await factsModel.insertMany(req.body);
  return res.json({ status: 'saved' });
});

export default router;
