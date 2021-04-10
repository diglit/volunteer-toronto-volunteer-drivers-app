const fs = require('fs');
const db = require('./db');

fs.writeFileSync('./temp-db.json', JSON.stringify(db));