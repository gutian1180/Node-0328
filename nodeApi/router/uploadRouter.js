const multer = require("multer");
const express = require("express");
// const bodyParser = require('body-parser');
const fs = require("fs");
const path = require("path");
const upload = multer(); //不同课堂,看文档；
const router = express.Router();
// const md5 = require("md5-nodejs");//md5加密方式1
const hash = require('object-hash');//md5加密方式2
 router.post('/',upload.single('name'),(req,res)=>{
    //前后端双重验证，多一份保险
    let {buffer,mimetype,size} = req.file;
    if(size>500000){
     return res.send({err:-1,msg:"图片尺寸过大"})};//return使程序停止
    let types = ["jpg","gif","png","jpeg"];//过滤图片类型
    let upFormat = mimetype.split("/")[1];//截取后缀
    if (types.indexOf(upFormat)===-1) {
        return  res.send({err:-1,msg:"图片类型错误"})//返回信息
    }
    let upName = parseInt((new Date()).getTime())+ "_" + parseInt(Math.random()*10000);//随机数 + 事件毫秒 + MD5编码；
    let upNameMd5 = hash.MD5(upName);//编码
    //文件写入静态资源目录；
    fs.writeFile(path.join(__dirname,"../public/upload",`${upNameMd5}.${upFormat}`), buffer, (err) => {
        if (!!err){
            return  res.send({code:-1,msg:"图片存储失败"})
        }
        return  res.send({code:0,msg:"图片存储成功",picturePath:`/public/upload/${upNameMd5}.${upFormat}`})
      });
});
module.exports = router;//抛出路由API;



