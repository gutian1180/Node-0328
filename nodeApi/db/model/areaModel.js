const mongoose = require('mongoose');
let areaScheme = new mongoose.Schema({
    //楼盘名字
    areaName:{type:String,required:true},
 })
 let areaModel = mongoose.model('area',areaScheme);
 module.exports = areaModel;