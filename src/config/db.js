import { Sequelize } from "sequelize";

// --- MySQL (Users & Bookmarks) ---
export const mysqlDB = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
    logging: false,
  }
);

// --- PostgreSQL (Opportunities) ---
export const pgClient = new Sequelize(
   process.env.PG_DATABASE,
   process.env.PG_USER,
   process.env.PG_PASSWORD,
  {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER || "audio_book",
  password: process.env.PG_PASSWORD || "pgAdmin4",
  database: process.env.PG_DB || "scholarconnect_opportunities",
  dialect: "postgres",
});
console.log("DEBUG: Using PG_USER =", process.env.PG_USER);

// Function to test connections
export const connectDatabases = async () => {
  try {
    await mysqlDB.authenticate();
    console.log("MySQL connected successfully");

    await pgClient.authenticate();
    console.log("PostgreSQL connected successfully");

  } catch (error) {
    console.error("Database connection error:", error);
  }
};
