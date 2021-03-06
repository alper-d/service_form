import React, {Component} from 'react'
import Services from './Services'
import { Switch, Route, Redirect} from 'react-router-dom'
import InfoTaker from './InfoTaker'
import {withRouter } from 'react-router-dom'


class MainComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='App'>
                <Switch location={this.props.location}>
                    <Route exact path='/services' component={Services}/>
                    <Route path='/services/:service_name/:q_no' component={InfoTaker}/>
                    <Redirect to='/services'/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(MainComponent)