// Insert your code here
const =mongoose = require('mongoose');

const countries = mongoose.Schema({
    name:String,
    flagImg:String,
    currency:String,
    population:Number,
})



module.exports = Country