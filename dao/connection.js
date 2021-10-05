const path = require("path");
const sqlite3 = require("sqlite3").verbose()

class Connection {

    constructor(db_path){
        this.db_name = path.join(db_path);
    }

    get_connection(){
        this.db = new sqlite3.Database(this.db_name, err => {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Connexion to db successful ${this.db_name}`);
        });
        return this.db
    }

}

module.exports = Connection

// -
// const sql_create = `CREATE TABLE IF NOT EXISTS Books (
//   Book_ID INTEGER PRIMARY KEY AUTOINCREMENT,
//   Title VARCHAR(100) NOT NULL,
//   Author VARCHAR(100) NOT NULL,
//   Comments TEXT
// );`;
//
// db.run(sql_create, err => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log("Successful creation of the 'Books' table");
// });