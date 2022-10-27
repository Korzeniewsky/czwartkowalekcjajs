const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  database: 'testtest'
});
async function selekt() {
    
    connection.promise().query("SELECT * FROM `tablica`")
        .then( ([rows,fields]) => {
            console.log(rows);
        })
        .catch(console.log)
        .then( () => con.end());
}

selekt();