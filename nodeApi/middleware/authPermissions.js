const permissionList =require('../config/permissions')
module.exports = async function(req, res, next){
  // 根据资源和方法验证权限
  // console.log(req.originalUrl.split('/')[1]);
  let {originalUrl,method,userInfo} = req
  // 对路径处理字符串
   let path = '/'+ originalUrl.split('/')[1]
  let {leavel,_id,userName} = userInfo
  let list = permissionList[leavel]
  // 判断是否满足权限
  let boolean = false 
  list.map((item,index)=>{
    // console.log(item.resources,path,item.permissions.indexOf(method.toLowerCase()))
    // 
    if(path.indexOf(item.resources)!==-1&&item.permissions.indexOf(method.toLowerCase())!==-1){
      boolean = true
    }
  })
  // console.log(boolean)
  if(boolean){ return  await next()}
  res.send({code:403,msg:'权限不足,无法访问'})
  

}
