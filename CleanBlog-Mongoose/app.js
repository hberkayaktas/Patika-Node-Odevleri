const express = require("express");
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');

const app = express();

//database bağlantısı
mongoose.connect('mongodb://localhost/cleanblog-test-db',
{
  useNewUrlParser:true,
  useUnifiedTopology:true
});
//kendi kendine veri tabanı yoksa oluşturur senle alakası olmaz

// TEMPLATE ENGİNE 
app.set("view engine","ejs");

//STATİC MİDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const posts = await Post.find({})
  res.render('index',{
    posts
  });
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
app.post("/add-post-db",async (req,res)=>{
  await Post.create(req.body);
  res.redirect("/");
})



const port = 3000;
app.listen(port, () => {
  console.log(`sever ${port} portunda çalışmaya başladı`);
});
