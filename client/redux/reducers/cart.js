/* eslint-disable */

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

const reduceCount = (item, cart,) => {
  if (item.count > 1) {
    const count = item.count - 1
    return count
  }
  return 0
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
      const newCart = state.cart
      const newState = state
      return {
        ...newState,
        cart: {
          ...newCart,
          [action.id]: {
            ...newCart[action.id],
            count: reduceCount(newCart[action.id])

          }
        },
        totalPrice: state.totalPrice - newCart[action.id].price
      }
    }
    default:
      return state
  }
}

export function addToCart(item) {
    return (dispatch) => {
      dispatch({
      type: ADD_TO_CART,
      item
    })
    }
}

export function removeFromCart(id) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      id
    })
  }
}


