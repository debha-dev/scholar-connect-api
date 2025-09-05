import express from 'express';
import config from './config/env.js';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Scholar Connect API is running...');
});

app.listen(config.port, async () => {
  console.log(`🚀 Server running on port ${config.port} in ${config.nodeEnv} mode`);
});