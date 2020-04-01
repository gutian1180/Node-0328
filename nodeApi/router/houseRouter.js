const  express = require('express');
const router = express.Router();
const {findHouse,addHouse,deleteHouse,update,findOne} = require("../control/houseControl");
//查询全部房源信息
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
  //查询一条房源信息
  router.get('/findone/:id',(req,res)=>{
    let {id}=req.params
    findOne(id)
    .then((info)=>{ 
      //lisi为全部房屋数据,allCount为总数量
      let {oneList} = info;
      res.send({code:0,msg:'查询成功',oneList})
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
  // 房产修改接口,这里采用put方法，传参同时利用query和body
router.put('/update/:id',(req,res)=>{

  
  let {id}=req.params
  
  let {areaName,kind,unit,sold,stock,picturePath,area,price,address} = req.body;//筛选信息；
 update(id,{areaName,kind,unit,sold,stock,picturePath,area,price,address})
  .then(()=>{res.send({code:0,msg:'房源信息修改成功'})})
  .catch((err)=>{res.send({code:-2,msg:'房源信息修改失败，请重试',err})})
})
  // 房产销售状态，这里采用put方法，传参同时利用query和body
  router.put('/updateSale/:id',(req,res)=>{
    let {id}=req.params
    let {sold} = req.body;//筛选信息；
   update(id,{sold})
    .then(()=>{res.send({code:0,msg:'销售状态修改成功'})})
    .catch((err)=>{res.send({code:-2,msg:'销售状态改失败，请重试',err})})
  })

  module.exports = router
