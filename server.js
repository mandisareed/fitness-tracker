//require dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const addApiRoutes = require("./routes/api-routes");

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



//routes that will be used (required above)
//need to add html route here and require it above
addApiRoutes(app);

//listen
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));