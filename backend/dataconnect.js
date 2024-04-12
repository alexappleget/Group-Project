const { Pool } = require("pg");
require("dotenv").config();

function createPool() {
  const pool = new Pool({
    user: import.meta.SQL_USER,
    password: import.meta.SQL_PASS,
    host: import.meta.SQL_HOST,
    port: import.meta.SQL_PORT,
    database: import.meta.SQL_DATABASE,
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
