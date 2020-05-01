const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const ApplicationSchema = new Schema({
        name : String,
        phone : String,
        company_name : String,
        designation : String,
        room : String,
        purpose : String,
        date : String,
        time_in : String,
        time_out : String
});

//Models- Register the Schema with the Model
const Apply = mongoose.model('Apply',ApplicationSchema);

module.exports = Apply;