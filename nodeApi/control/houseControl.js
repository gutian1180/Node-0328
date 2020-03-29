const houseModel = require("../db/model/houseModel");
// 房屋分页查询
let findHouse = async(page ,pageSize)=>{
  let allCount = (await houseModel.find()).length;
  let list = await houseModel.find().skip(Number((page-1)*pageSize)).limit(Number(pageSize));
  return {list,allCount};
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


module.exports={
  addHouse,
  findHouse,
  deleteHouse
}