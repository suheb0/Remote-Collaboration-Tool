const mongoose = require('mongoose');
connectDB =(url)=> {
    mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})}
module.exports = connectDB