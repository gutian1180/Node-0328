const {verifyToken} = require('../utils/jwt')
const { tokenCheck } = require('../control/useControl');
let tokenMiddlWare = (req,res,next)=>{
    // console.log('token拦截器',req.body)
    let token = req.headers.authorization.split("Bearer ")[1]//固定写法,约定俗成
     //验证用户有没有传token
    if(!token){return res.send({err:-997,msg:'token丢失'})} 
    //获取验证token的状态
    let tokenState = verifyToken(token);
    // console.log(tokenState) ;//token是由ID和mail加密后产生的，所以解密后里面肯定含有id
    if(tokenState){
       //判断一下数据库token 和用户传递的token 是否一致
       tokenCheck(tokenState._id,token)
       .then(()=>{
         next()//中间件必须使用next才能让数据通过中间件往下走
       })
       .catch((err)=>{
         console.log(err)
        res.send({err:-999,msg:err})
       })
    }else{
      res.send({err:-998,msg:'token失效'})
    }
  }
  module.exports =tokenMiddlWare