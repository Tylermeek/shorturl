// 引入express
const express = require("express");
const router = express.Router();
const UrlModel = require("../models/Url");
const valiUrl = require("valid-url");
const shortID = require("shortid");
const config = require("config");

// @route POST api/url/shorten
// @desc 创建短链接

router.get("/shorten", async (req, res) => {
  // 1.获取长链接
  const { longUrl } = req.body;

  // 2.验证长链接
  if (!valiUrl.isUri(longUrl)) {
    return res.status(401).json("无效url");
  }
  // 3.生成url code
  const urlCode = shortID.generate();
  // 4.生成短链接
  const shortUrl = config.get("baseUrl") + urlCode;
  // 5.存入数据库
  const url = new UrlModel({
    longUrl,
    shortUrl,
    urlCode,
    date: new Date(),
  });
  url.save();
  // 6.响应url对象
  res.json(url);
});

module.exports = router;
