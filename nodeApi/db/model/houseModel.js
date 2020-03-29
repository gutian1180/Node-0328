const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    address : { type:String ,required:true},
    price : { type:String ,required:true},
    area :{ type:String ,required:false},
    picturePath :{ type:String ,required:false},
    sold:{type:Number,default:10},//已售
    stock:{type:Number,default:99},//代售
    unit:{type:String,default:"套"},//单位
    kind:{type:mongoose.Schema.Types.ObjectId,ref:"kinds"},
    areaName:{type:mongoose.Schema.Types.ObjectId,ref:"area"},
 })
 let houseModel = mongoose.model('house',userSchema);
 module.exports = houseModel;