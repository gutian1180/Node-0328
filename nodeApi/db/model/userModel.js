// 用户登录相关的数据模型
const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    leavel:{type:String,default:'admin'},
    // leavel:{type:String,required:false},
    userName:{type:String,required:true},
    passWord:{type:String,required:true,select:false},
    token:{type:String,required:false,select:false}
 })
 let userModel = mongoose.model('admins',userSchema);
 module.exports = userModel;