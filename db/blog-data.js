'use strict';

const { DATABASE, PORT } = require('./config');
const knex = require('knex')(DATABASE);
const DATABASE_URL = process.env.DATABASE_URL
||  global.DATABASE_URL 
|| 'postgresql://localhost/blog-app';

exports.DATABASE = {
  client: 'pg',
  connection: DATABASE_URL,
  pool: { min: 0, max: 3 }, // Fix issue w/ ElephantSQL
  debug: true               // Outputs knex debugging information
};
// {
//     "id": 1001,
//     "title": "What the government doesn''t want you to know about cats",
//     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//   },

knex('blog-app')
  .insert(
    {title: "What the government doesn''t want you to know about cats",
      borough: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    })
  .then(console.log);

  module.exports = data;