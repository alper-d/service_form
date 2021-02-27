import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {ListGroup, ListGroupItem} from 'reactstrap'
import services from '../assets/services.json'

//const mapDispatchToProps = (dispatch) =>{
//    return{
//        makeSearch: (searchQuery) => {dispatch(fetchMusic(searchQuery))}        
//    }
//}//

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
                    <Link to={`services/${service.name}/1`}>
                        <ListGroupItem>{service.name}</ListGroupItem>
                    </Link>
                </div>
            )
        })
        return(
            <div className='container'>
                <ListGroup>
                    {renderServices}
                </ListGroup>
            </div>
        )
                
    }
    
}

export default Services