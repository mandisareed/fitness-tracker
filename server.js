//require dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//connect with mongoose
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
});

//create an app and use middleware to parse body and log the data
const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//create a single hello world route
app.get("*", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

//listen
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));