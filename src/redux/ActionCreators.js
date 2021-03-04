import * as ActionTypes from './ActionTypes'

export const addAnswer = (q_id, response) =>({
    type: ActionTypes.ADD_RESPONSE,
    payload: {q_id, response}
})

export const updateAnswer = (q_id, response) => (dispatch) => {
    dispatch(responseLoading())
    dispatch(addAnswer(q_id, response))
}

export const fetchQuestions = (questions) =>({
    type: ActionTypes.FETCH_QUESTIONS,
    payload: questions
})

export const questionsLoading = () => ({
    type:ActionTypes.QUESTIONS_LOADING,
})

export const setServiceDetails = (service) => ({
    type:ActionTypes.SET_SERVICE_DETAILS,
    payload:service
})
export const resetStore = () => ({
    type: ActionTypes.RESET_STORE,
})
export const responseLoading = ()=>({
    type: ActionTypes.RESPONSE_LOADING
})

export const getQuestions = (serviceId) => (dispatch) => {
    return fetch(`./assets/${serviceId}-questions.json`)
    .then(response => response.json())
    .then(response => {
        dispatch(fetchQuestions(response))
        console.log(response)
    })
    
}