import React, {Component} from 'react'
import { Alert, Button, Progress, Spinner } from 'reactstrap';
//import questions_262 from '../assets/262-questions.json';
import questions_399 from '../assets/399-questions.json';
import Type5_Question from './Type5_Question';
import Type6_Question from './Type6_Question';
import Type8_Question from './Type8_Question'
import {connect} from 'react-redux'
import {resetStore} from '../redux/ActionCreators'

const mapStateToProps = (state) => {
    return{
        q_list: state.form_data.questions,
        q_loading: state.form_data.questions_loading,
        service_details: state.form_data.service,
        responses:state.form_data.responses,
        response_loading: state.form_data.response_loading
    }
}

const mapDispatchToProps = dispatch => ({
    resetStore:() => dispatch(resetStore())
})


class InfoTaker extends Component{
    constructor(props){
        super(props)
        //servis turu prop
        this.state = {
            //service_name: this.props.match.params.service_name,
            step:this.props.match.params.q_no,
            q_list: questions_399,
        }
        this.nextStep = this.nextStep.bind(this)
        this.previousStep = this.previousStep.bind(this)
        this.returnToServices = this.returnToServices.bind(this)

    }

    nextStep(){
        let {step} = (this.state)
        step = step*1
        const {q_list} =this.props
        //console.log(step, q_list.length)
        if (step+1 <= q_list.length){
            this.setState({step:step+1})
            this.props.history.push(`${step+1}`)
        }else{
            this.setState({step:step+1})
            this.props.history.push("success")

        }
    }
    componentDidUpdate(){
        let {step} = (this.state)
        step = step*1
        const {q_list} =this.props
        console.log(step, q_list.length)
        if (step > q_list.length && !this.props.response_loading){
            console.log(this.props.responses)
        }
    }
    previousStep(){
        const {step} = this.state
        if (step+1 >1){
            this.setState({step:step-1})
            this.props.history.push(`${step-1}`)
        }else{
            //dismound back button
        }
    }
    returnToServices(){
        this.props.resetStore()
        this.props.history.push(`../..`)
        
    }

    render(){
        var render_question = () =><React.Fragment></React.Fragment>
        if(this.state.step===this.props.q_list.length+1){
            return(
                <Alert color="primary">Success</Alert>
            )
        }

        if(!this.props.q_loading & this.props.q_list.length !==0){
            const current_question = this.props.q_list[this.state.step-1]
            render_question = () => {
                if(current_question.typeId === 6){
                    return(
                        <Type6_Question question={current_question} 
                        updateAnswer={this.props.updateAnswer}
                        nextStep={this.nextStep}/>)}
                else if(current_question.typeId ===5){
                    return(
                        <Type5_Question question={current_question} 
                        updateAnswer={this.props.updateAnswer}
                        nextStep={this.nextStep}/>)}
                else if(current_question.typeId === 8){
                    return(
                        <Type8_Question question={current_question} 
                        updateAnswer={this.props.updateAnswer}
                        nextStep={this.nextStep}/>)}
            }
        }else if(this.props.q_loading){
            render_question = () => <h1>No result</h1>
        }
        else{
            render_question = () => <Spinner></Spinner>
        }
        return(
            <div className='container'>
                <div className="row justify-content-between my-1">
                <Button disabled={this.state.step<=1} className="col-2 ml-3" onClick={this.previousStep}>
                    <span className='fa fa-arrow-left'></span>
                </Button>
                <h1 className="col3">{this.props.match.params.service_name}</h1>
                <Button className="col-2 mr-3" onClick={this.returnToServices}>
                <span className='fa fa-times'></span>
                </Button>
                </div>
                <React.Fragment key={`${this.props.q_list.length}-${this.state.step}`}>
                <Progress className="progressBar" value={Math.trunc(((this.state.step-1)*100)/this.props.q_list.length)} color="success"></Progress>
                <Alert className="clearfix priceBar">
                <span className="float-left">Ortalama Fiyat Aralığı</span>
                <span className="float-right">
                {`${this.props.service_details.price.min} - ${this.props.service_details.price.max} `}
                <span>TL</span>
                </span>
                </Alert>
                
                {this.props.service_details.discountRateText && 
                    <Alert className="alertBanner">
                        {this.props.service_details.discountRateText}
                    </Alert>
                }
                {render_question()}
                </React.Fragment>
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(InfoTaker)