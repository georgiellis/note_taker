// import modules
var express = require("express");
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

// create an express application
const app = express();
var PORT = process.env.PORT || 3000;

// express data handle
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

// API and HTML routes
app.use(apiRoutes);
app.use(htmlRoutes);

// start the application
app.listen(PORT, function() {
  console.log("Now listening on PORT: ", PORT);
});