var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

require("./db/conn");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    return res.redirect("index.html");
});

var db = mongoose.connection

app.post("/add", (req, res) => {
    var category = req.body.category;
    var amount = req.body.amount;
    var info = req.body.info;
    var date = req.body.date;

    var data={
        "Category": category,
        "Amount" : amount,
        "Info": info,
        "Date": date
    }

    db.collection('users').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully")

    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});