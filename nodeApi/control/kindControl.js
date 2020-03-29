const kindModel = require("../db/model/kindModel");
// 房屋类型查询
let find = async()=>{
  let list = await kindModel.find();
  return {list};
}
// 房屋类型添加接口
let add = async (obj)=>{
  let result = await kindModel.insertMany(obj);
  if (!result) {
    throw (404,'添加失败')
  }else{
    return result;
  }
}
// 房产类型删除接口
let deleteKind = async (obj)=>{
  let result = await kindModel.findByIdAndDelete(obj);
  if (!result) {
    throw (404,'删除失败')
  }else{
    return result;
  }
}   



module.exports={
  add,
  find,
  deleteKind
}