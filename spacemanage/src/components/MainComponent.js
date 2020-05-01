import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './HomeComponent'
import ApplicationForm from './ApplicationComponent';
import Applications from "./DisplayApplications";

class Main extends Component{


    render(){
        return(
            <div>
                <Switch>
                    <Route path="/home" component={()=><Home/>}/>
                    <Route exact path="/apply" component={()=><ApplicationForm/>}/>
                    <Route exact path="/applications" component={()=><Applications/>}/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        )
    }
}

export default Main;