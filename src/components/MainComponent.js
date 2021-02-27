import React, {Component} from 'react'
import Services from './Services'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import InfoTaker from './InfoTaker'


class MainComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='App'>
                <h1>sdffsdscs</h1>
                <Switch location={this.props.location}>
                    <Route exact path='/services' component={Services}/>
                    <Route path='/services/:service_name/:q_no' component={InfoTaker}/>
                    <Route path='/services/:service_name' component={InfoTaker}/>
                    
                    <Redirect to='/services'/>
                </Switch>
            </div>
        )
    }
}

export default MainComponent