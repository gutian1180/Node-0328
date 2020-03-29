const areaModel = require("../db/model/areaModel");
// 房屋分页查询
let find = async()=>{
  let list = await areaModel.find();
  return {list};
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
module.exports={
  add,
  find
}