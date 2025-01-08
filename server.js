const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const db = require("./db"); 
const Person = require("./models/Person");
const MenuItem = require("./models/MenuItem");
const bodyParser = require("body-parser");
app.use(bodyParser.json());


// import routes...
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);
const menuItemsRoutes = require("./routes/menuItemsRoutes");
app.use("/menuItem", menuItemsRoutes);


app.get("/", (req, res) => {
    res.send("Hello world");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});