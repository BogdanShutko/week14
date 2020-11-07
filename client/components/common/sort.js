import React from 'react'

const Sort = () => {
  return (
    <div className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3">
      <div className="inline-flex">
        <button
          type="button"
          className="bg-gray-300 uppercase hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          sort by price
        </button>
        <button
          type="button"
          className="bg-gray-300 uppercase hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          sort by alphabet
        </button>
      </div>
    </div>
  )
}

export default Sort
