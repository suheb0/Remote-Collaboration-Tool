const mongoose = require('mongoose');
const LoginDataSchema = new mongoose.Schema({
    userId:{type:String,required:true,unique:true},
    email:{type:String,required:true},
    name:{type:String,required:true},
    picture:{type:String},
    createdAt:{type:Date,date:Date.now},
    updatedAt:{type:Date,date:Date.now}
})
const LoginData = mongoose.model('LoginData',LoginDataSchema)
module.exports = LoginData