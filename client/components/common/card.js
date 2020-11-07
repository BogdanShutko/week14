import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/reducers/cart'

const Card = (props) => {
  const currensy = useSelector((s) => s.goods.currensy)
  const rate = useSelector(s => s.goods.rates[currensy])
  const cart = useSelector(s => s.cart.cart)
  const dispatch = useDispatch()
  const { data } = props

  return (
    <div className=" card m-1 rounded overflow-hidden shadow-lg w-64 ">
      <div className="justify-center">
        <img className="w-full p-4 h-56" src={data.image} alt="Sunset in the mountains" />
      </div>
      <div className="px-6  h-20">
        <div className="font-bold font-serif text-xm text-justify   w-full break-normal">
          {data.title}
        </div>
        <span>
          <span className="font-serif text-xm mr-2 font-bold text-justify w-auto">
            {(data.price * rate).toFixed(2)}
          </span>
          <span className="font-serif text-xm pr-24 font-bold text-justify w-auto">{currensy}</span>
          <button
            className="float-right font-serif text-xm font-bold text-justify "
            type="button"
            onClick={() => dispatch(addToCart(data))}
          >
            +
          </button>
        </span>
        <div>
          <span className="font-serif font-bold">in cart:</span>
          <span className="font-serif float-right font-bold">
            {typeof cart[data.id] !== 'undefined'
            ? cart[data.id].count 
            : ''}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card

