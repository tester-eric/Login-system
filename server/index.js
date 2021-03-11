const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt')
const saltRound = 10


const app = express();

require('dotenv').config();

app.use(express.json()) //recognize the incoming Request Object as a JSON Object.
app.use(cors({
    origin: ["http://localhost:3000"], //only request from this link will be allowed
    methods: ["GET", "POST"],
    credentials: true //important : allowing cookie enable
}
));
app.use(bodyparser.urlencoded({ extended: true }))// * must included


const db = mysql.createConnection({
    user: process.env["user"],
    host: process.env["host"],
    password: process.env["password"],
    database: process.env["database"]
})


//register

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRound, (err, hash) => {
        if (err) {
            console.log(err)
        }
        db.query("INSERT INTO frist_login_system (username,password) VALUES (?,?)",
            [username, hash], (err, result) => {
                console.log(err);
            }
        );
    })

});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM frist_login_system Where username =?", username,
        (err, result) => {
            if (err) { res.send({ err: err }); }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (err, response) => {
                    if (response) {
                        res.json({ message: "login sucess!" })
                    }
                    else {
                        res.json({ message: "Wrong username/password!!!" })
                    }

                })
            }
            else{
                res.json({ message: "The user does not exist!" })
            }
        });
})




app.listen(3001, () => {
    console.log("running server");
});
