import React, {Component} from 'react'
import { Button, CardDeck, Card, CardTitle, FormGroup, Input, Label,  CardImg} from 'reactstrap'
import {connect} from 'react-redux'
import { updateAnswer } from '../redux/ActionCreators'

const mapDispatchToProps = dispatch => ({
    updateAnswer:(q_id, response) => dispatch(updateAnswer(q_id,response))
})


class Type5_Question extends Component{
    constructor(props){
        super(props)
        this.handleContinue = this.handleContinue.bind(this)
        this.handleRadioInput = this.handleRadioInput.bind(this)
        this.state = {
            selectedAnswer:null
        }
    }
    handleRadioInput(e){
        this.setState({selectedAnswer:e.target.value})
    }
    handleContinue(){
        this.props.updateAnswer(this.props.question.id,{
            code:this.state.selectedAnswer,
            value:this.props.question.values.filter(
                q=>q.id === 1*this.state.selectedAnswer)[0].value
        })
        this.props.nextStep()
    }
    render(){
        const answers = this.props.question.values.map((answer) => {
            return(
                <div className='col-6 col-xs-6 col-md-3 my-1' key={answer.id}>
                <Card className='h-100'>
                <CardImg className='my-1 ' src={answer.valueImageUrl} width='100%'></CardImg>
                <CardTitle>

                <FormGroup check>
                    <Label check>
                        <Input 
                            type='radio' 
                            value={`${answer.id}`}
                            checked={this.state.selectedAnswer === `${answer.id}`}
                            onChange={this.handleRadioInput}
                        />
                        {answer.value}
                    </Label>
                </FormGroup>
                </CardTitle>
                </Card>
                </div>
            )
        })
        return(
            <React.Fragment>
                <h1>{this.props.question.label}</h1>
                <FormGroup tag='fieldset'>
                <CardDeck className='row'>
                    {answers}
                </CardDeck>
                </FormGroup>
                <Button disabled={this.state.selectedAnswer === null} className="cntButton" onClick={this.handleContinue}>Continue</Button>
            </React.Fragment>
        )
    }
}

export default connect(null,mapDispatchToProps)(Type5_Question)