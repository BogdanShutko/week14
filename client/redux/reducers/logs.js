 import axios from "axios"

const GET_LOGS = 'GET_LOGS'

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS: {
      return {...state, logs: action.data}
    }
    default:
      return state
  }
}

 export function getLogs() {
  return (dispatch) => {
    axios.get('/api/v1/logs').then(({ data }) => dispatch({ type: GET_LOGS, data}))
  }
 }