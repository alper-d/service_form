import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {ListGroup, ListGroupItem, Badge} from 'reactstrap'
import services from '../assets/services.json'
import {connect} from 'react-redux'
import {getQuestions, setServiceDetails } from '../redux/ActionCreators'

const mapDispatchToProps = (dispatch) =>{
    return{
        getQuestions:(service_id) => dispatch(getQuestions(service_id)),
        setServiceDetails:(details) => dispatch(setServiceDetails(details))
    }
}

//const mapStateToProps = (state) => {
//    return{
//        searchResults: state.musics.musics,
//        searchLoading: state.musics.searchLoading
//    }
//}


class Services extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    componentDidUpdate(){

    }
//
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