import {Component} from 'react'
import { CardDeck, Card, FormGroup, Input, Label, ListGroup, ListGroupItem, CardImg } from 'reactstrap'

class Type5_Question extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const answers = this.props.question.values.map((answer) => {
            console.log(answer.value)
            return(
                <div className='col-12 col-xs-4 col-md-3 my-1'>
                <Card className='h-100' key={answer.id}>
                <div className='thumbnail'>
                </div>
                <CardImg src={answer.valueImageUrl}></CardImg>
                <FormGroup check>
                    <Label check>
                        <Input type='radio' name='radio1'/>{' '}
                        {answer.value}
                    </Label>
                </FormGroup>
                </Card>
                </div>
            )
        })
        return(
            <div className='container'>
                <h1>{this.props.question.label}</h1>
                <FormGroup tag='fieldset'>
                <CardDeck className='row'>
                {answers}
                </CardDeck>
                </FormGroup>
            </div>
        )
    }
}

export default Type5_Question