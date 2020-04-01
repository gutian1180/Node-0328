const JWT = require("jsonwebtoken");
const secret = "mima";
let createToken = (data,expiresIn)=>{
    let  obj ={} ;
    obj.data = data || {};//加空对象防止报错
    obj.ctime = (new Date()).getTime();//获取当前时间
    obj.expiresIn = expiresIn || 1000*60*60*24*7;//计算过期时间
    let token = JWT.sign(obj,secret);//创建token
    return token;
}
let verifyToken = (token)=>{
    let result = null ;
    try {
        let {data,ctime,expiresIn} = JWT.verify(token,secret)//解码token
        let nowTime =(new Date()).getTime()//获取当前时间
        if(nowTime-ctime<expiresIn){
        //  时间过期判断
          result = data //验证ok对外只抛出数据data,里面包含_id,level,userName供下一步操作使用
        }
    } catch (error) {  
        throw(402,"token失效")
    }
    return result;
}
module.exports={createToken,verifyToken};