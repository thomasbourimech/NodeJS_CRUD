const path = require("path")
const db_name = path.join(__dirname, "..", "data", "users.db")
const connection = require(path.join(__dirname, "..", "dao", "connection"))

const connectionInstance = new connection(db_name)
const db = connectionInstance.get_connection()




