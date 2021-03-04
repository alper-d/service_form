import {createStore,combineReducers, applyMiddleware} from 'redux'
import {Responses} from './forms'
import logger from 'redux-logger'
import thunk from 'redux-thunk'



export const reduxConfig = () => {
    return createStore(combineReducers({
        form_data: Responses,
    }),
    applyMiddleware(thunk, logger))
}