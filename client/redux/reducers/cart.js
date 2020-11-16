import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_BASKET'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'




const initialState = {
  cart: {},
  totalPrice: 0
}

const setCount = (cart) => {
  if (typeof cart !== 'undefined') {
    const count = cart.count + 1
    return count
  }
  return 1
}



export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.item.id]: {
            ...action.item,
            count: setCount(state.cart[action.item.id])
          }
        },
        totalPrice: state.totalPrice + action.item.price
      }
    }
    case REMOVE_FROM_CART: {
      const newAmount = state.cart[action.id].count - 1
      const newCart = Object.keys(state.cart).reduce(
        (acc, elem) => {
         return (elem !== action.id)
          ? {...acc, [elem]: state.cart[elem]}
          : {...acc}
        }
        , {}
      )
      if (newAmount <= 0) {
        return {
          ...state,
          cart: newCart,
          totalPrice: state.totalPrice - state.cart[action.id].price
        }
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.id]: {
            ...state.cart[action.id],
            count: newAmount
          }
        },
        totalPrice: state.totalPrice - state.cart[action.id].price
      }
    }
    default:
      return state
  }
}

export function addToCart(item) {
    return (dispatch) => {
      axios({
        method: 'post',
        url: '/api/v1/logs',
        data: {
          action: `add ${item.title} to the cart`,
          time: +new Date()
        }
      })
      dispatch({
      type: ADD_TO_CART,
      item
    })
    }
}

export function removeFromCart(id) {
  return (dispatch, getState) => {
    const state = getState()
    axios({
      method: 'post',
      url: '/api/v1/logs',
      data: {
        action: `remove ${state.cart.cart[id].title} from the cart`,
        time: +new Date()
      }
    })
    dispatch({
      type: REMOVE_FROM_CART,
      id
    })
  }
}


