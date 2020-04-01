const  express = require('express');

const router = express.Router();
const {adminLogin,addAdmin} = require("../control/adminControl");
// const tokenMiddlWare = require('../middleware/tokenMiddleWare')//这里要做登录成功抛出token的操作
//引入登录的数据库操作函数；
//记住路由两个引用：1，数据模型；2，数据库操作函数；
//登录部分
  router.post('/login',(req,res)=>{
    let {userName,passWord} = req.body 
    adminLogin(userName,passWord)
    .then((info)=>{ 
      res.send({code:0,msg:'登录成功',userInfo:info})})
    .catch((err)=>{ res.send({code:-1,msg:err})})
  });
// 添加管理员,非上线API
  router.post('/add',(req,res)=>{
    let {userName,passWord} = req.body;//筛选信息；
      // 验证码判断； //启动函数
      addAdmin(userName,passWord)
      .then(()=>{res.send({code:0,msg:'注册ok'})})
      .catch((err)=>{res.send({code:-2,msg:err})})
  });
  module.exports = router