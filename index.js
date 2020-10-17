const { Client } = require('pg');

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

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data insert successful');
    client.end();
});

const query1 = 'SELECT first_name FROM names;';

client.query(query1, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(res);
    client.end();
});
