const  express = require('express');

const router = express.Router();
const {find,add,deleteKind} = require("../control/kindControl");

  router.get('/find',(req,res)=>{
    find()
    .then((info)=>{ 
      // console.log(info);
      let {list} = info;
      res.send({code:0,msg:'查询成功',list})
    })
    .catch((err)=>{ res.send({code:-1,msg:'查询失败'})})
  });
// 添加房产类型,非上线API
  router.post('/add',(req,res)=>{
    let {kindName} = req.body;//筛选信息；
      add({kindName})
      .then(()=>{res.send({code:0,msg:'插入成功'})})
      .catch((err)=>{res.send({code:-2,msg:'插入失败请重试',err})})
  });
    // 房产房产类型删除接口
    router.delete('/delete',(req,res)=>{
      let {_id}=req.query
      deleteKind({_id})
      .then(()=>{res.send({code:0,msg:'删除成功'})})
      .catch((err)=>{res.send({code:-2,msg:'删除失败请重试',err})})
    })
  module.exports = router