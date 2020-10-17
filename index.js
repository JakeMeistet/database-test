const { Client } = require('pg');
const readline = require('readline-sync')

const client = new Client({
    user: 'up2002753',
    host: 'localhost',
    database: 'jake_db',
    password: 'Outdoor23',
    port: 5433,
});

client.connect();

const query = `
INSERT INTO names (record_id, first_name, last_name)
VALUES ('6', 'Sarah', 'Bailey')
`;

const query1 = 'SELECT * FROM names;';

client.query(query1, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    var dbData = res
    for (i = 0; i < dbData.rows.length; i += 1){
        console.log(dbData.rows[i].first_name)
    }
});





var row = readline.question('What row would you like to choose? ')

const query2 = 'SELECT ' + row + ' FROM names;';
console.log(query2)

client.query(query2, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    var dbData = res
    for (i = 0; i < dbData.rows.length; i += 1){
        var test = dbData.rows[i]
        console.log (test.last_name)
    }
    client.end()
});