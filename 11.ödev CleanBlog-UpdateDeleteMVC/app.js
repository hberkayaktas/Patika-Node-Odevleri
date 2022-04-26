const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const postController = require("./controllers/postControllers");
const pageController = require("./controllers/pageControllers");
const methodOverride = require("method-override");

const app = express();

//database bağlantısı
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//kendi kendine veri tabanı yoksa oluşturur senle alakası olmaz

// TEMPLATE ENGİNE
app.set("view engine", "ejs");

//STATİC MİDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method", {methods: ["POST", "GET"], }) );

app.get("/", postController.getAllPost);
app.get("/about",pageController.getAbout);
app.get("/post/:id", postController.getPost);
app.get("/update-post/:id", postController.getUpdatePost);
app.put("/update-post/:id", postController.UpdatePost);
app.delete("/delete-post/:id", postController.deletePost);
app.get("/add-post",pageController.getAddPost);
app.post("/add-post-db", postController.addPost);


const port = 3000;
app.listen(port, () => {
  console.log(`sever ${port} portunda çalışmaya başladı`);
});
