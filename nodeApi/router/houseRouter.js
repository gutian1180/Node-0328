const  express = require('express');
const router = express.Router();
const {findHouse,addHouse,deleteHouse} = require("../control/houseControl");

  router.get('/findall',(req,res)=>{
    let {page,pageSize}=req.query
    findHouse(page,pageSize)
    .then((info)=>{ 
      //lisi为全部房屋数据,allCount为总数量
      let {list,allCount} = info;
      res.send({code:0,msg:'查询成功',list,allCount})
    })
    .catch((err)=>{ res.send({code:-1,msg:'查询失败'})})
  });
// 房产添加接口,非上线API
  router.post('/add',(req,res)=>{
    let {areaName,kind,unit,sold,stock,picturePath,area,price,address} = req.body;//筛选信息；
      addHouse({areaName,kind,unit,sold,stock,picturePath,area,price,address})
      .then(()=>{res.send({code:0,msg:'插入成功'})})
      .catch((err)=>{res.send({code:-2,msg:'插入失败请重试',err})})
  });
  // 房产删除接口
  router.delete('/delete',(req,res)=>{
    let {_id}=req.query
    deleteHouse({_id})
    .then(()=>{res.send({code:0,msg:'删除成功'})})
    .catch((err)=>{res.send({code:-2,msg:'删除失败请重试',err})})
  })


  module.exports = router
