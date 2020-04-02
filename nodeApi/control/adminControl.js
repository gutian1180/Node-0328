const userModel = require("../db/model/userModel");
const {createToken} = require('../utils/jwt');
//userLogin,userReg
//

// 用户登录
let adminLogin = async(userName,passWord)=>{
  let result = await userModel.findOne({userName,passWord});
  if(!!result){
    //把三个数据写入token
    let {leavel,userName,_id} = result;
    
    let token =createToken({leavel,userName,_id});
    let updateResult  = await userModel.updateOne({_id},{token})//把生成的token写入服务器数据库
    
    if(!updateResult){throw (500,'数据库写入token失败')}
    return {leavel,userName,token};//返回给前端写入本地储存
  }else{
    throw (404,'用户名或密码不存在')
  }
}
// 添加接口
let addAdmin = async (userName,passWord,leavel)=>{
  let isExst = await userModel.findOne({userName});
  // 如果查询到数据 返回查到的数据 没有返回假 
  let result
  if (!!isExst) {
    throw (404,'用户存在')
  }else{
     result = await userModel.insertMany({userName,passWord,leavel});
  }
  return result;
}
//  判断token 和用户是否统一 
let tokenCheck = async (_id,token)=>{
  let result = await userModel.findOne({_id,token})
  if(result){
    return result 
  }else{
    throw '用户token不匹配'
  }
}


module.exports={
  adminLogin,
  addAdmin,
  tokenCheck
  
  
}