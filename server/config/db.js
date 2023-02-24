const mongoose = require("mongoose");
const config = require("config");
const dbUrl = config.get("mongodbUrl");

// 创建 monogodb 数据库链接 方法
const connectDB = async () => {
    try{
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("mongodb connected");        
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
};

module.exports = connectDB