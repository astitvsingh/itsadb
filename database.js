const fs = require("fs");

let database = {};

function loadDatabase(_database) {
  database = _database;
}

function getDatabase() {
  return database;
}

function saveDatabase(_database) {
  if (_database.name === undefined) {
    return console.error("ERROR: database is not initialized");
  }

  const databasePath = `./data/${_database.name}.itsadb`;

  const jsonDatabasePath = `./data/${_database.name}.json`;

  fs.writeFileSync(databasePath, JSON.stringify(_database));

  fs.writeFileSync(jsonDatabasePath, JSON.stringify(_database));
}

module.exports = { getDatabase, loadDatabase, saveDatabase };
