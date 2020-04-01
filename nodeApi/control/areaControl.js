const areaModel = require("../db/model/areaModel");
// 房屋分页查询
let find = async()=>{
  let alist = await areaModel.find();
  return {alist};
}
// 房屋添加接口
let add = async (obj)=>{
  let result = await areaModel.insertMany(obj);
  if (!result) {
    throw (404,'添加失败')
  }else{
    return result;
  }
}
// 房产名称删除接口
let deleteArea = async (_id)=>{
  let result = await areaModel.findByIdAndDelete(_id);
  if (!result) {
    throw (404,'删除失败')
  }else{
    return result;
  }
}   
module.exports={
  add,
  find,
  deleteArea
}