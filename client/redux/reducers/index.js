import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import goods from './goods'
import cart from './cart'


const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    goods,
    cart
  })

export default createRootReducer
