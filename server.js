const express = require("express");
const app = express();
const compression = require("compression");
const expressLayouts = require("express-ejs-layouts");
const PORT = 4000;

const router = require("./routes/index");
app.use(compression());

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use("/", router);

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.set("layout", "layouts/layout");

app.listen(PORT, () =>
  console.log(`App listening on http://localhost:${PORT}`)
);
