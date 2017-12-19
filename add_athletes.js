const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'development',
    password: 'development',
    database: 'vagrant'
  }
});

const args = process.argv.slice(2);

knex.insert({first_name: args[0], last_name: args[1], birthdate: args[2]})
.into('famous_athletes')
.then(function(results) {
  console.log(results.rows[0]);
})
//console.log(results);
knex.destroy();