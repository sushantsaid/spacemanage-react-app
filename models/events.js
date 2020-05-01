const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const EventsSchema = new Schema({
    id : String,
    name : String,
    isAvailable : Boolean
});

//Models- Register the Schema with the Model
const Events = mongoose.model('Events',EventsSchema);

module.exports = Events;