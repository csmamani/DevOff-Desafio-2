const express = require("express");
const app = express();
const morgan = require("morgan");

/* Setting */
app.set("port", process.env.PORT || 3000);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); //permite leer datos de formularios
app.use(express.json());

/* Routes */
app.use(require("./routes/index.js"));

/* Starting the server */

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
