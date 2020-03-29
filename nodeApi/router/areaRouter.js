const  express = require('express');

const router = express.Router();
const {find,add} = require("../control/areaControl");

  router.get('/find',(req,res)=>{
    find()
    .then((info)=>{ 
      //lisi为全部房屋数据,allCount为总数量
      let {list} = info;
      res.send({code:0,msg:'查询成功',list})
    })
    .catch((err)=>{ res.send({code:-1,msg:'查询失败'})})
  });
// 添加管理员,非上线API
  router.post('/add',(req,res)=>{
    let {areaName} = req.body;//筛选信息；
      add({areaName})
      .then(()=>{res.send({code:0,msg:'插入成功'})})
      .catch((err)=>{res.send({code:-2,msg:'插入失败请重试',err})})
  });
  module.exports = router