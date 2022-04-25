const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Tablo oluşturma
const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);
//                            burada post collections ismi


module.exports = Post;