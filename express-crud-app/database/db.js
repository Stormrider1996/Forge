//require postgresql module
const { Pool } = require("pg");

// create a connection object to connect to the database
const pool = new Pool({
  host: "localhost", // replace with your host name
  user: "postgres", // replace with your user name
  password: "hphs4ZEQma", // replace with your password
  database: "roango", // replace with your database name
});

//connect to the database
pool.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

//export the connection object
module.exports = pool;
