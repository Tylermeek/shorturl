const mongoose = require("mongoose");

// 创建数据表结构
const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

// 创建表模型 model
const model = mongoose.model("Url", urlSchema);

module.exports = model;
