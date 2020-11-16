import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import goods from './goods'
import cart from './cart'
import logs from './logs'



const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    goods,
    cart,
    logs
  })

export default createRootReducer
