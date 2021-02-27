import {Component} from 'react'
import { Button } from 'reactstrap';
import questions_262 from '../assets/262-questions.json';
import questions_399 from '../assets/399-questions.json';
import Type5_Question from './Type5_Question';
import Type6_Question from './Type6_Question';

class InfoTaker extends Component{
    constructor(props){
        super(props)
        //servis turu prop
        this.state = {
            q_list: questions_399
        }
    }

    render(){
        //const answers = this.props.question.values.map((answer) => {
        //    return(
        //        <div>

        //        </div>
        //    )
        //})
        const current_question = this.state.q_list[this.props.match.params.q_no]
        console.log(current_question.typeId)
        const render_question = () => {
            if(current_question.typeId === 6){
                return(
                    <Type6_Question question={current_question}></Type6_Question>
                )
            }else if(current_question.typeId ===5){
                return(
                    <Type5_Question question={current_question}></Type5_Question>
                )
            }
        }
        return(
            <div className='container'>
                <h1>Banner {this.props.match.params.service_name}</h1>
                {render_question()}
                <Button>Continue</Button>
            </div>
        )
    }
}

export default InfoTaker