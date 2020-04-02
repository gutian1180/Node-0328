module.exports={
  admin: [
    { resources:'/admin',name:"管理员操作", permissions: ['get'] },
    { resources:'/house',name:"商品操作", permissions: ['get'] },
    { resources:'/banner',name:"轮播图操作", permissions: ['get'] },
    { resources:'/houseArea',name:"房产类型操作", permissions: ['get'] },
    { resources:'/housekind',name:"楼盘名字操作", permissions: ['get'] },
    { resources:'/houseupload',name:"文件操作", permissions: ['get'] }
          ],
  root: [ 
    { resources:'/admin',name:"管理员操作", permissions: ['get',"post","put","delete"] },
    { resources:'/house',name:"商品操作", permissions: ['get',"post","put","delete"] },
    { resources:'/banner',name:"轮播图操作", permissions: ['get',"post","put","delete"] },
    { resources:'/houseArea',name:"房产类型操作", permissions: ['get',"post","put","delete"] },
    { resources:'/housekind',name:"楼盘名字操作", permissions: ['get',"post","put","delete"] },
    { resources:'/houseupload',name:"文件操作", permissions: ['get',"post","put","delete"] }
        ]
}
