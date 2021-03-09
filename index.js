const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const restaurantRouter = require("./routes/restaurants");
const indexRouter = require("./routes/index");
const logger = require("./middleware/logger");
const path = require("path");
//Template Engine
app.engine("hbs", hbs({ extname: "hbs" }));
app.set("view engine", "hbs");

//Middleware
//build in express json that can make you can read json request format
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Custom middleware
app.use(logger);

//Route
app.use("/apis/restaurants", restaurantRouter);
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Listening to  port 3000");
});
