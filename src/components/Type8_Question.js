import {Component} from 'react'
import { Button, FormFeedback, FormGroup, Input} from 'reactstrap'
import { updateAnswer } from '../redux/ActionCreators'
import {connect} from 'react-redux'


const mapDispatchToProps = dispatch => ({
    updateAnswer:(q_id,response) => dispatch(updateAnswer(q_id, response))
})


class Type8_Question extends Component{
    constructor(props){
        super(props)
        this.handleContinue = this.handleContinue.bind(this)
        this.handleTextInput = this.handleTextInput.bind(this)
        this.textFieldEnum = Object.freeze({"invalid":0,"valid":1,"neutral":2})
        this.state={
            text:"",
            textValid:this.textFieldEnum.neural
        }
    }
    handleContinue(){
        if(this.state.text.length > 0){
            this.props.updateAnswer(this.props.question.id,{code:"text",value:this.state.text})
            this.props.nextStep()
        }else{
            this.setState({textValid: this.textFieldEnum.invalid})
            setTimeout(()=>this.setState({textValid:this.textFieldEnum.neutral}),4000)
        }
    }
    
    handleTextInput(e){
        this.setState({text:e.target.value})
    }

    render(){
        return(
            <div className='container'>
                <h1>{this.props.question.label}</h1>
                <FormGroup>
                    <Input 
                        valid={+this.state.textValid===this.textFieldEnum.valid} 
                        invalid={+this.state.textValid===this.textFieldEnum.invalid} 
                        type='textarea' 
                        id="work_details"
                        placeholder={this.props.question.placeHolder}
                        onChange={this.handleTextInput}
                        />
                    <FormFeedback valid> That is ok</FormFeedback>
                    <FormFeedback invalid={1}>Bu alan zorunlu!</FormFeedback>
                </FormGroup>
                <Button disabled={this.state.textValid===this.textFieldEnum.invalid} className="ctnButton" onClick={this.handleContinue}>Continue</Button>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(Type8_Question)