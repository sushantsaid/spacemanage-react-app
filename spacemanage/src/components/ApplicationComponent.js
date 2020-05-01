import React,{Component} from 'react';
//import axios from 'axios';
import {Control,Errors,LocalForm } from 'react-redux-form';
import { Row,Label,Col,Button } from 'reactstrap';
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ApplicationForm extends Component{

    constructor(props){
        super(props);
        this.state={
            name : '',
            email : '',
            phone : '',
            company_name : '',
            designation : '',
            room : 'Event Space',
            purpose : '',
            date : new Date(),
            time_in : '',
            time_out : ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        //this.sendDataToServer = this.sendDataToServer.bind(this);
    }
    

    handleChange = ({target}) =>{
        const {name,value} = target;
        this.setState({[name] : value});
    };

    handleDateChange = event_date => {
        this.setState({
          date: event_date
        });
      };

      /*
      sendDataToServer=(payload)=> {
        console.log("Sending to server : "+JSON.stringify(payload));
        console.log(typeof(payload.time_in)); 
        console.log(typeof(payload.time_out));

        axios.post('/space/save',payload)
        .then(response=>{
            console.log(response.data.message);
            alert(response.data.message);
            })
            .catch(error=>{
                console.log("POST application",error.message);
                alert("Couldn't send your application : "+error.message);})

    };
*/

    handleSubmit = (values) =>{
        //event.preventDefault();
        console.log("State : : : "+JSON.stringify(this.state));
        console.log("Current values are : ",JSON.stringify(values));
        const payload={
            name : values.name,
            email : values.email,
            phone : values.phone,
            company_name : values.company_name,
            designation : values.designation,
            room : values.room ?values.room : this.state.room,
            purpose : values.purpose,
            date : this.state.date,
            time_in : this.state.time_in,
            time_out : this.state.time_out
        }
        if( this.state.time_in.length!=5 || this.state.time_out.length!=5 ){
            alert("Please enter correct In Time and Out Time");
        }
        else{
            console.log("Payload : "+JSON.stringify(payload));
            var confirmation=prompt("Are you sure?",JSON.stringify(payload));
            if(confirmation){
                alert("Data Sent!");
                //this.sendDataToServer(payload);
            }else{

            }
        }
        
        
/*
        axios.post('/space/save',payload)
        .then(response=>{
            console.log(response.data.message);
            })
            .catch(error=>{
                console.log("POST application",error.message);
                alert("Couldn't send your application : "+error.message);})

                /*
        */
        };

        

    render(){

        return(
            <center>
            <div className="col-12 col-md-9">
                <LocalForm model="feedback" onSubmit={(values)=>this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="name" md={2}>Name</Label>
                        <Col md={6}>
                            <Control.text model=".name" id="name" name="name" placeholder="Name"
                                className="form-control"
                                validators={{
                                    required,
                                    minLength : minLength(3),
                                    maxLength : maxLength(20)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages = {{
                                    required : "Required",
                                    minLength : "Minimum length should be 2 characters",
                                    maxLength : "Upto 20 characters allowed"
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={3}>
                                <Control.text model=".email" id="email" name="email" 
                                    placeholder="Email"
                                    className="control-form"
                                    validators={{
                                        required,validEmail
                                    }}
                                    />
                                <Errors
                                    className="text-danger"
                                    model=".email"    
                                    show = "touched"
                                    messages={{
                                        required : 'Required',
                                        validEmail : 'Incorrect email'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="phone" md={2}>Contact No.</Label>
                            <Col md={5}>
                                <Control.text model=".phone" id="phone" name="phone" 
                                    placeholder="Contact Number"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength : minLength(7),
                                        maxLength : maxLength(12),
                                        isNumber
                                    }}
                                    />
                                <Errors 
                                    className="text-danger"
                                    model = ".phone"
                                    show="touched"
                                    messages = {{
                                        required : 'Required',
                                        minLength : 'Minimum length should be 6 digits',
                                        maxLength : 'Maximunm 12 digits allowed',
                                        isNumber : 'Only numbers allowed'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                        <Label htmlFor="company_name" md={2}>Company Name</Label>
                        <Col md={6}>
                            <Control.text model=".company_name" id="company_name" name="company_name" placeholder="Company Name"
                                className="form-control"
                                validators={{
                                    required,
                                    minLength : minLength(3),
                                    maxLength : maxLength(20)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".company_name"
                                show="touched"
                                messages = {{
                                    required : "Required",
                                    minLength : "Minimum length should be 2 characters",
                                    maxLength : "Upto 20 characters allowed"
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="designation" md={2}>Designation</Label>
                        <Col md={4}>
                            <Control.text model=".designation" id="designation" name="designation" placeholder="Designation"
                                className="form-control"
                                validators={{
                                    required,
                                    minLength : minLength(3),
                                    maxLength : maxLength(20)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".designation"
                                show="touched"
                                messages = {{
                                    required : "Required",
                                    minLength : "Minimum length should be 2 characters",
                                    maxLength : "Upto 20 characters allowed"
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="room" md={2}>Space</Label>
                            <Col md={3}>
                                <Control.select model=".room" name="room" 
                                selected = {this.state.room}
                                className="form-control" onSelect={(selected)=>{this.setState({room : selected})}}>
                                    <option>Event Space</option>
                                    <option>Podcast</option>
                                </Control.select>
                            </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="date" md={2}>Date</Label>
                        <Col md={3}>
                            <DatePicker className="form-control"
                                id="date"
                                name="date"
                                isClearable
                                showYearDropdown
                                showMonthDropdown
                                minDate={new Date()}
                                selected={this.state.date}
                                onChange={this.handleDateChange}
                                dateFormat="dd/MM/yyyy">
                            </DatePicker>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="time_in" md={2}>Time In</Label>
                        <Col md={2}>
                            <TextField
                                id="time_in"
                                name="time_in"
                                type="time"
                                value={this.state.time_in}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={(event)=>{
                                    console.log("time - in === "+event.target.value);
                                    var t = event.target.value;
                                    console.log(t.length);
                                    this.setState({time_in : t})}
                                }  
                            />
                        </Col>
                        <Label htmlFor="time_out" md={2}>Time Out</Label>
                        <Col md={2}>
                            <TextField
                                id="time_out"
                                name="time_out"
                                type="time"
                                value={this.state.time_out}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={(event)=>{
                                    console.log("time - out === "+event.target.value);
                                    var t = event.target.value;
                                    this.setState({time_out : t})}
                                }  
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                            <Label htmlFor="purpose" md={2}>Purpose</Label>
                            <Col md={6}>
                                <Control.textarea model=".purpose" 
                                    id="purpose" 
                                    name="purpose"
                                    placeholder="Purpose of applying..." 
                                    rows="8"
                                    className="form-control"/>
                            </Col>
                    </Row> 
                    <Row className="form-group">
                        <Col md={10}>
                            <Button type="submit" color="primary">Send Application</Button>
                        </Col>
                    </Row>           
                </LocalForm>
            </div>
            </center>

        );
    }
}

export default ApplicationForm;
