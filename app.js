const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const products = require("./data/products.json");
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
    res.render("products", products);
});

productRouter.route("/1").get((req, res) => {
    res.send("Hello World, I'm wan");
});

app.use("/products", productRouter)

app.get("/", (req, res) => {
    res.render('index', { username: 'Earneiei', customers: ["Aldrick", "Floyd", "Noel"] });
})

app.listen(PORT, () => {
    // console.log("Listening on port" + chalk.green(" : " + port));
    console.log("Listening on port %d", PORT);
})