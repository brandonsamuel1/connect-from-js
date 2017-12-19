const pg = require('pg');
const client = new pg.Client({
  user: 'development',
  password: 'development',
  database: 'vagrant'
});

const args = process.argv.slice(2);

function getFamousAthleteByName(name, callback) {
  client.query("SELECT * FROM famous_athletes WHERE first_name = $1 OR last_name = $1", [name], callback)
};


client.connect((error) => {
  if (error) {
    console.log('Heres an error ', error);
  }

  getFamousAthleteByName(args[0], (error, results) => {
    if (error) {
      console.log('Error running query ', error);
      return
    }
    console.log('Searching...');
    console.log('Found 1 person(s) by the name ' + args[0])
    console.log(results.rows[0]);

     client.end();
  });
})