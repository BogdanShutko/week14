
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from './head'
import Header from './common/header'
import { removeFromCart } from '../redux/reducers/cart'



const Basket = () => {
  const dispatch = useDispatch()
  const cart = useSelector(s => s.cart.cart)
  const currensy = useSelector((s) => s.goods.currensy)
  const rate = useSelector((s) => s.goods.rates[currensy])
  const goods = Object.keys(cart)
  return (
    <div>
      <Head title="Hello" />
      <Header />

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">№</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">In cart</th>
            <th className="px-4 py-2">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {goods.map((item, index) => {
            if (cart[item].count === 0) {
              return <div/>
            }
            return (
              <tr key={item}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2 flex justify-center">
                  <img src={cart[item].image} alt="" />
                </td>
                <td className="border px-4 py-2">{cart[item].title}</td>
                <td className="border px-4 py-2">{(cart[item].price * rate).toFixed(2)}</td>
                <td className="border px-4 py-2 text-center">
                  {cart[item].count}
                  <button
                    type="button"
                    className="px-1"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    -
                  </button>
                </td>
                <td className="border px-4 py-2">
                  {cart[item].count * (cart[item].price * rate).toFixed(2)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)

/*   <tr>
            <td className="border px-4 py-2">Intro to CSS</td>
            <td className="border px-4 py-2">Adam</td>
            <td className="border px-4 py-2">858</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">
              A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on
              Design
            </td>
            <td className="border px-4 py-2">Adam</td>
            <td className="border px-4 py-2">112</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Intro to JavaScript</td>
            <td className="border px-4 py-2">Chris</td>
            <td className="border px-4 py-2">1,280</td>
          </tr> */