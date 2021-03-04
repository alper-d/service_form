import React, {Component} from 'react'
import Services from './Services'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import InfoTaker from './InfoTaker'
import { updateAnswer, getQuestions } from '../redux/ActionCreators'

const mapDispatchToProps = dispatch => ({
    updateAnswer:(response) => dispatch(updateAnswer(response)),
    getQuestions:(service_id) => dispatch(getQuestions(service_id))

})

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
                    {/*<Route path='/services/:service_name' component={()=><InfoTaker updateAnswer={this.props.updateAnswer}/>}/>
                    */}
                    <Redirect to='/services'/>
                </Switch>
            </div>
        )
    }
}

//export default withRouter(connect(null,mapDispatchToProps)(MainComponent))
export default MainComponent