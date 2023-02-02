import React from 'react'

const RemoveCart = ({btnHandler, product}) => {
  return (
    <button
    onClick={(e) => btnHandler(e, product)}
    className={`text-sm text-white rounded-sm bg-red-600 px-3 py-1 hover:bg-red-700 border border-red-700`}
    >
            Remove
    </button>
  )
}

export default RemoveCart