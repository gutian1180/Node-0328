require("./db/connect");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');//，需看文档；

app.use(bodyParser.urlencoded({ extended: false }));//，需看文档；
app.use(bodyParser.json());//，需看文档

app.use("/public",express.static(path.join(__dirname,"./public")));//静态资源

let  userRouter = require("./router/adminRouter");
let  houseRouter = require("./router/houseRouter");
let  kindRouter = require("./router/kindRouter");
let  areaRouter = require("./router/areaRouter");
app.use("/admin",userRouter);//登录接口
app.use("/house",houseRouter);//房产信息接口
app.use("/housekind",kindRouter);//楼盘名字接口
app.use("/houseArea",areaRouter);//房产类型接口

app.listen(2000,()=>{console.log(
    `服务器启动成功`);
})


