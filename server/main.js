// 引入express
const express = require("express")
const app = express()
// 引入body-parser
const bodyParser = require("body-parser")
// 引入config
const config = require("config")
// 引入数据库连接
const connectDB = require("./config/db")

// 链接数据库
connectDB()

// 使用bodyParser中间件解析json，解析后才可以使用req.body
app.use(bodyParser.json()) //express中可以使用内置json方法

// 配置路由
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/urls'))


// 监听启动服务
const PROT = config.PROT
app.listen(PROT, () => console.log("server opened on " + PROT))