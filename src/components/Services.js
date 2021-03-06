import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {ListGroup, ListGroupItem} from 'reactstrap'
import services from '../assets/services.json'
import {connect} from 'react-redux'
import {getQuestions, setServiceDetails,resetStore } from '../redux/ActionCreators'


const mapDispatchToProps = (dispatch) =>{
    return{
        getQuestions:(service_id) => dispatch(getQuestions(service_id)),
        setServiceDetails:(details) => dispatch(setServiceDetails(details)),
        resetStore:() => dispatch(resetStore())
    }
}

class Services extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.resetStore()
    }

    render(){
        const renderServices = services.map((service) => {
            return(
                <div key={service.serviceId}>
                    <Link 
                        to={`services/${service.name}/1`} 
                        onClick={()=>{
                            this.props.getQuestions(service.serviceId)
                            this.props.setServiceDetails(service)}}>
                        <ListGroupItem>{service.name}</ListGroupItem>
                    </Link>
                </div>
            )
        })
        return(
            <div className='container'>
                <ListGroup>
                    <ListGroupItem color="success" style={{"fontWeight":"bold"}}>Servisler</ListGroupItem>
                    {renderServices}
                </ListGroup>
            </div>
        )
                
    }
    
}

export default connect(null,mapDispatchToProps)(Services)