import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 5055,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'defaultsecret',
};

export default config;
