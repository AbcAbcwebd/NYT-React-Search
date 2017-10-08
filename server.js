// Boilerplate code taken from in class demonstration 

// NOTE: Development version will not run properly on Windows (because of how start script is written)

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("nyt-react-search/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./nyt-react-search/build/index.html"));
});

// Database configuration with mongoose
mongoose.connect("mongodb://heroku_mftcp9cd:p080tnvhjjdcck6ulncce4uiis@ds149144.mlab.com:49144/heroku_mftcp9cd"); // mongodb://localhost/news-scraper-db
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// ROUTES
const routes = require("./routes/routes.js");
app.use("/", routes);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
