const { Pool } = require("pg");
require("dotenv").config();

function createPool() {
  const { SQL_USER, SQL_PASS, SQL_HOST, SQL_PORT, SQL_DATABASE } = process.env;
  if (!SQL_USER || !SQL_PASS || !SQL_HOST || !SQL_PORT || !SQL_DATABASE) {
    throw new Error("Incomplete database configuration.");
  }

  const pool = new Pool({
    user: SQL_USER,
    password: SQL_PASS,
    host: SQL_HOST,
    port: SQL_PORT,
    database: SQL_DATABASE,
  });

  //to test the connection to the database
  pool.query("SELECT NOW()", (err, res) => {
    if (err) {
      console.error("Error connecting to the database:", err);
    } else {
      console.log("Successfully connected to the database:", res.rows[0]);
    }
  });

  return pool;
}
module.exports = createPool();
