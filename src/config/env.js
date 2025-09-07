import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 5055,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET,
  verifySecret: process.env.VERIFY_SECRET,
  pg: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER || "audio_book",
    password: process.env.PG_PASSWORD || "pgAdmin4",
    database: process.env.PG_DB || "scholarconnect_opportunities",
  }
};
