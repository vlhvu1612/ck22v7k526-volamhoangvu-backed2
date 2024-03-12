/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");

const contactsRouter = require("./app/routes/contact.route");

const app = express();

    //ham json
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/contacts", contactsRouter);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

module.exports = app;