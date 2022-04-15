const config = require('./config');

let dbOn = false;
let db;

function initDB() {
  const { Client } = require('pg');
  const dbc = new Client({
    host: config.host,
    user: config.user,
    password: config.password,
    port: config.port,
    database: config.database,
    sslmode: config.sslmode,
    ssl: config.ssl,
  });
  return dbc;
}

function connectDB() {
  db = initDB();
  try {
    db.connect();
    console.log('Connected to database.');
    dbOn = true;
  } catch (error) {
    console.error(error);
    dbOn = false;
  }
  return dbOn;
}

function startDB() {
  connectDB();
}

module.exports = {
  query: (text, params, callback) => {
    return db.query(text, params, callback);
  },
  startDB,
};
