import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Currensy from './currensy'
import Sort from './sort'

const Header = () => {
  const totalPrice = useSelector(s => s.cart.totalPrice)
  const currensy = useSelector (s => s.goods.currensy)
  const rate = useSelector(s => s.goods.rates[currensy])
  return (
    <nav className=" bg-white shadow-md  w-full ">
      <div className=" flex justify-between">
        <Link
          to="/"
          className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-5 mr-8"
          id="brand-name"
        >
          Home
        </Link>
        <Link
          to="/basket"
          className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-5 mr-8"
          id="order-count"
        >
          Basket
        </Link>
        <Currensy />
        <Sort />
        <a
          className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-5"
          href="#"
        >
          {`Total amount: ${(totalPrice * rate).toFixed(2)} ${currensy}`}
        </a>
      </div>
    </nav>
  )
}

export default Header
