const mongoose = require('mongoose');
let kindScheme = new mongoose.Schema({
    // 房子类别
    kindName:{type:String,required:true},
 })
 let kindModel = mongoose.model('kinds',kindScheme);
 module.exports = kindModel;