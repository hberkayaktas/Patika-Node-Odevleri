const express = require("express");
const ejs = require('ejs');
const path = require('path');
const app = express();

// TEMPLATE ENGİNE 
app.set("view engine","ejs");

//STATİC MİDDLEWARE
app.use(express.static('public'));


app.get("/", (req, res) => {
    res.render('index');
});
app.get("/about", (req, res) => {
  res.render('about');
});
app.get("/post", (req, res) => {
  res.render('post');
});
app.get("/add-post", (req, res) => {
  res.render('add_post');
});


const port = 3000;
app.listen(port, () => {
  console.log(`sever ${port} portunda çalışmaya başladı`);
});
