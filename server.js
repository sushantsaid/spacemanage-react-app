const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8081;

const routes = require('./routes/api');

//Connect to MongoDB server
const MONGODB_URI = 'mongodb+srv://spacemanage:helloworld@spacedb-xw27i.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI || 'mongodb://localhost/spacedb',{
    useNewUrlParser : true,
    useUnifiedTopology : true
});

//Check if connection has been established
mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected');
});

//Data parsing
app.use(express.json());
app.use(express.urlencoded({extended:false}));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('spacemanage/build'));
}

//HTTP request logger...logs the requests to terminal
app.use(morgan('tiny'));

app.use('/space',routes); 

app.listen(PORT,console.log(`Server is starting at ${PORT}`));