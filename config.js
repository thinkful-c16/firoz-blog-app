'use strict';

//const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://localhost/blog-app';
const DATABASE_URL = 'postgresql://localhost/blog-app';

const DATABASE = {
  client: 'pg',
  connection: DATABASE_URL,
  pool: { min: 0, max: 3 }, // Fix issue w/ ElephantSQL
  debug: true               // Outputs knex debugging information if true
};

const PORT = process.env.PORT || 8080; 
module.exports = {PORT, DATABASE};
//exports.DATABASE = DATABASE;
