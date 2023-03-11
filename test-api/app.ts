import express from 'express';
import * as dotenv from 'dotenv';
import factRouter from './routes/facts';

dotenv.config()

const {
  PORT
} = process.env;

const app = express();

const allowCrossDomain = (_req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(allowCrossDomain);
app.use(express.static('public'))

app.use('/', factRouter);

app.use(function(_err: any, _req: any, res: { sendStatus: (arg0: number) => void; }, _next: any) {
  res.sendStatus(404);
});

if (require.main === module) {
  app.listen(PORT);
}

export default app;
