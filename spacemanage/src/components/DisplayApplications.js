import React, {Component} from 'react';
//import axios from 'axios';


class Applications extends Component{

    constructor(props){
        super(props);
        this.state={
            applications : []
        }
    }

    componentDidMount(){
        this.getApplicationData();
    }

    getApplicationData=()=>{
  /*
        axios.get('/space/application_data')
        .then(response=>{
            console.log(response.data.message);
            const data = response.data.message;
            this.setState({applications:data});
        })
        .catch(error=>{
            console.log("Error :  ; ; : "+error.message);
        })
    */
    }

    displayApplicationsData(data){
        if(!data.length) return (<div></div>)
        else{
            return data.map((item,index)=>(
                <div key={index}>
                    <h1>{item.name}</h1>
                    <h2>{item.phone}</h2>
                </div>
            ));
        }
    };

    render(){
        return(
            <div>
                {this.displayApplicationsData(this.state.applications)}
            </div>
        )
    }
}

export default Applications;