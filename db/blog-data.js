'use strict';


const { DATABASE } = require('../config');
const knex = require('knex')(DATABASE);

knex('stories')
  .insert(
    {
      title: "What the government doesn''t want you to know about cats",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elite", 
    })
  .then(console.log);
