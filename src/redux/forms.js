import * as ActionTypes from './ActionTypes'

export const initState = {
    questions:[],
    responses:[],
    questions_loading: false,
    response_loading:false,
    service:null
}

export const Responses = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RESPONSE:
            const answers = state.responses.filter((r)=>{
                return r.q_id !== action.payload.q_id
            })
            return {
                ...state,
                response_loading:false,
                responses: answers.concat(
                    {
                        q_id:action.payload.q_id,
                        response:action.payload.response}
                    )
            }
        case ActionTypes.FETCH_QUESTIONS:
            return{
                ...state,
                questions:action.payload,
                questions_loading: false
            }
        case ActionTypes.QUESTIONS_LOADING:
            return{
                ...state,
                questions_loading: true
            }
        case ActionTypes.RESPONSE_LOADING:
            return{
                ...state,
                response_loading:true
            }
        case ActionTypes.RESET_STORE:
            return{
                ...initState
            }
        case ActionTypes.SET_SERVICE_DETAILS:
            return{
                ...state,
                service:action.payload
            }
        default:
            return state
    }
}
