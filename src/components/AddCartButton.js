import React from 'react'

export const AddCartButton = ({btnHandler, product, isCarted}) => {
  return (
    <button
            onClick={(e) => {
              btnHandler(e, product);
            }}
            disabled={isCarted}
            className={`text-sm text-white rounded-sm bg-emerald-600 px-3 py-1 hover:bg-emerald-700 border border-emerald-800 ${
              isCarted ? "disable" : ""
            }`}
          >
            Add to Cart
          </button>
  )
}
