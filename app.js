const express = require("express");
const app = express();
const path = require("path");
const sequelize = require('./data/database.js')
const User = require('./models/users')

//const db_name = path.join(__dirname, "data", "users.db")
//const connection = require("./dao/connection")
//const connectionInstance = new connection(db_name)
//const db = connectionInstance.get_connection()

sequelize.sync().then(() => console.log('Sequelize Ready'))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())

app.listen(3000, () => {
    console.log("Server started (http://localhost:3000/) !");
});
app.post('/users', (req, res) => {
    User.create(req.body).then( () => {
        res.send('user is inserted');
    })
})
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/data", (req, res) => {
    const test = {
        title: "Liste du catalogue",
        items: ["Ville", "Département", "Région"]
    };
    res.render("data", {model: test});
})

