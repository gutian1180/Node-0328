const houseModel = require("../db/model/houseModel");
// 房屋分页查询
let findHouse = async(page ,pageSize)=>{
  let allCount = (await houseModel.find()).length;
  let list = await houseModel.find().skip(Number((page-1)*pageSize)).limit(Number(pageSize)).populate('kind','kindName -_id').populate('areaName','areaName -_id');
  return {list,allCount};
}
//查询一条房产 
let findOne = async(id)=>{
  let oneList = await houseModel.findById(id);
  return {oneList};
}
// 房产添加接口
let addHouse = async (obj)=>{
  let result = await houseModel.insertMany(obj);
  
  if (!result) {
    throw (404,'添加失败')
  }else{
    return result;
  }
}  
// 房产删除接口
let deleteHouse = async (obj)=>{
  let result = await houseModel.findByIdAndDelete(obj);
  
  if (!result) {
    throw (404,'删除失败')
  }else{
    return result;
  }
} 
// 房产信息修改接口
let update = async (_id,obj) => {
  let result = await houseModel.findByIdAndUpdate(_id,obj)
  if (!result) {
    throw (404,'修改失败')
  }else{
    return result;
  }
}
let updateSale = async (_id,obj) => {
  let result = await houseModel.findByIdAndUpdate(_id,obj)
  
  
  if (!result) {
    throw (404,'修改失败')
  }else{
    return result;
  }
}
module.exports={
  addHouse,
  findHouse,
  deleteHouse,
  update,
  updateSale,
  findOne
}