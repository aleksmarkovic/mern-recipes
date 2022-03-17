"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _connection = _interopRequireDefault(require("./db/connection"));

var _recipes = _interopRequireDefault(require("./routes/recipes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config({
  path: './config.env'
});

var port = process.env.PORT || 5000;
var app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_recipes.default); // get driver connection

app.listen(port, () => {
  // perform a database connection when server starts
  _connection.default.connectToServer(function (err) {
    if (err) console.error(err);
  });

  console.log("Server is running on port: ".concat(port));
});