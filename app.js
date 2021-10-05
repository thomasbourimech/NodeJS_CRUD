const express = require("express");
const app = express();
const path = require("path");
const sqlite3 = require("sqlite3").verbose()
const db_name = path.join(__dirname, "data", "users.db")
const connection = require("./dao/connection")
const connectionInstance = new connection(db_name)
const db = connectionInstance.get_connection()



app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

app.listen(3000, () => {
    console.log("Server started (http://localhost:3000/) !");
});

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

