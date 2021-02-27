import {Component} from 'react'
import { FormGroup, Input, Label, ListGroup, ListGroupItem } from 'reactstrap'

class Type6_Question extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const answers = this.props.question.values.map((answer) => {
            console.log(answer.value)
            return(
                <ListGroupItem className='row' key={answer.id}>
                <FormGroup check >
                    <Label check>
                        <Input type='radio' name='radio1'/>
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
                {answers}
                </ListGroup>
            </div>
        )
    }
}

export default Type6_Question