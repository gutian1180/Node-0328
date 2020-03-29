const userModel = require("../db/model/userModel");
// const {createToken} = require('../utils/jwt');
//userLogin,userReg
//

// 用户登录
let adminLogin = async(userName,passWord)=>{
  let result = await userModel.findOne({userName,passWord});
  if(!!result){
    let {leavel,userName} = result;
    // let token =createToken({_id,userName});
    // let updateResult  = await userModel.updateOne({_id},{token})
    // console.log(updateResult);
    // return {_id,userName,token};
    return {leavel,userName};
  }else{
    throw (404,'用户名或密码不存在')
  }
}
// 添加接口
let addAdmin = async (userName,passWord)=>{
  let isExst = await userModel.findOne({userName});
  // 如果查询到数据 返回查到的数据 没有返回假 
  let result
  if (!!isExst) {
    throw (404,'用户存在')
  }else{
     result = await userModel.insertMany({userName,passWord});
  }
  return result;
}


module.exports={
  adminLogin,
  addAdmin
  
  
}