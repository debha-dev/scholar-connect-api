import express from 'express';
import {config} from './config/env.js';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDatabases } from './config/db.js';
import { User } from './models/mysql/User.js';
import { Opportunity } from './models/postgres/Opportunity.js';
import { Application } from './models/postgres/Application.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Scholar Connect API is running...');
});

const syncDatabases = async () => {
  try {
    await User.sync({ alter: true}); // Sync User table in MySQL
    console.log('MySQL User table synced');

    await Opportunity.sync({ alter: true}); // Sync Opportunity table in Postgres
    console.log('Postgres Opportunity table synced');

    await Application.sync({ alter: true});
    console.log('Postgres Application table synced');
  } catch (error) {
    console.error('Error syncing tables:', error);
  }
};

app.listen(config.port, async () => {
    await connectDatabases();
    await syncDatabases();
    console.log(`Server running on port ${config.port} in ${config.nodeEnv} mode`);
});