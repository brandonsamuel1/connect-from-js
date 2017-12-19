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

function getFamousAthleteByName(name, callback) {
  client.query("SELECT * FROM famous_athletes WHERE first_name = $1 OR last_name = $1", [name], callback)
};

knex.select('*').from('famous_athletes')
.where('first_name', args[0]).orWhere('last_name', args[0])
.asCallback(function(error, results) {
  if (error) {
    return console.log(error);
  }
  console.log(results);
  knex.destroy();
});
