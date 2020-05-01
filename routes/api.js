const express = require('express');

const router = express.Router();

const Events = require('../models/events');
const Apply = require('../models/apply');

//Routes
router.get('/application_data',(req,res)=>{
    Apply.find({})
    .then((data)=>{
        //console.log('application data : '+data[0]);
        res.json({message:data});
    })
    .catch((error)=>{
        //console.log('Error occurred : '+error);
        res.json({message:error});
    });
});

router.post('/save',(req,res)=>{
    console.log(req.body);
    const application_data={
        name : req.body.name,
        phone : req.body.phone,
        company_name : req.body.company_name,
        designation : req.body.designation,
        room : req.body.room,
        purpose : req.body.purpose,
        date : req.body.date,
        time_in : req.body.time_in,
        time_out : req.body.time_out
    }
    const newApplication = new Apply(application_data);

    newApplication.save((error)=>{
        if(error){
            res.status(500).json({message : "Internal server error...!"});
        }
        else{
            //By default the response code is 200 i.e OK
            res.json({message : "Application data received..!"});
        }
    });

    console.log("Data : "+JSON.stringify(application_data));
    
    //res.json(data);
});

module.exports = router;