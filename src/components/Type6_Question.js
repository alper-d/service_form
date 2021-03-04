import {Component} from 'react'
import { Button, FormGroup, Input, Label, ListGroup, ListGroupItem } from 'reactstrap'
import {connect} from 'react-redux'
import { updateAnswer } from '../redux/ActionCreators'

const mapDispatchToProps = dispatch => ({
    updateAnswer:(q_id,response) => dispatch(updateAnswer(q_id, response))
})


class Type6_Question extends Component{
    constructor(props){
        super(props)
        this.handleContinue = this.handleContinue.bind(this)
        this.handleRadioInput = this.handleRadioInput.bind(this)
        
        this.state = {
            selectedAnswer:`${this.props.question.values[0].id}`
        }

    }
    handleRadioInput(e){
        this.setState({selectedAnswer:e.target.value})
    }
    
    handleContinue(){
        console.log(this.state.selectedAnswer)
        this.props.updateAnswer(this.props.question.id,{
            code:this.state.selectedAnswer,
            value:this.props.question.values.filter(
                q=>q.id === 1*this.state.selectedAnswer)[0].value
        })
        this.props.nextStep()
    }

    render(){
        const answers = this.props.question.values.map((answer) => {
            console.log(answer.value)
            return(
                <ListGroupItem className='row' key={answer.id}>
                <FormGroup check >
                    <Label check>
                        <Input type='radio' 
                               value={`${answer.id}`} 
                               checked={this.state.selectedAnswer === `${answer.id}`}
                               onChange={this.handleRadioInput}    
                               />
                        {answer.value}
                    </Label>
                </FormGroup>
                </ListGroupItem>
            )
        })
        return(
            <div className='container'>
                <h1>{this.props.question.label}</h1>
                <ListGroup>
                <FormGroup>
                {answers}
                </FormGroup>
                </ListGroup>
                <Button className="ctnButton" onClick={this.handleContinue}>Continue</Button>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(Type6_Question)