import React from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrensy } from '../../redux/reducers/goods'

const Currensy = () => {
  const dispatch = useDispatch()
  const currensyClick = (currensy) => {
    dispatch(changeCurrensy(currensy))
  }
  return (
    <div className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3">
      <div className="inline-flex">
        <button
          onClick={() => currensyClick('USD')}
          type="button"
          className="bg-gray-300 uppercase hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          USD
        </button>
        <button
          onClick={() => currensyClick('EUR')}
          type="button"
          className="bg-gray-300 uppercase hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 "
        >
          EUR
        </button>
        <button
          onClick={() => currensyClick("CAD")}
          type="button"
          className="bg-gray-300 uppercase hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          CAD
        </button>
      </div>
    </div>
  )
}

export default Currensy