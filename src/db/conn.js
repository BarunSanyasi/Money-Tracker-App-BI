const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MoneyTracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.error("No Connection:", e);
});