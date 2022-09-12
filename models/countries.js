// Insert your code here
const mongoose = require('mongoose');
const PolulationbyYear = mongoose.Schema({
    population:Number,
    year:Date,
}) 

const countries = mongoose.Schema({
    name:String,
    flagImg:String,
    currency:String,
    population:[PolulationbyYear],
})

const Country = mongoose.model('countries', countrySchema)

module.exports = Country