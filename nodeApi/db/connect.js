const mongoose = require("mongoose");//
mongoose.connect("mongodb://39.101.222.148:27017/H51918",{useNewUrlParser: true,useUnifiedTopology:true});//需看文档

let db = mongoose.connection;//区别1
db.on("error",()=>{console.log("链接失败");
});
db.once("open",()=>{console.log("第一次链接成功");
});