import React from "react";

const ProductCard = ({ product, btnHandeler, isCarted , children}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg ">
      <div className="img-contain w-full overflow-hidden max-h-96 object-contain flex justify-center">
        <img
          className="object-fit object-left-bottom"
          src={product.image}
          alt=""
          width={"200px"}
          loading="lazy"
        />
      </div>
      <div className="describe px-6 pt-4">
        <div className="font-bold text-xl mb-2 whitespace-nowrap text-ellipsis overflow-hidden">
          {product.title}
        </div>
        <div className=" text-gray-700 text-sm pb-1">
          {product.description.slice(0, 100)}...
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-red-600">$ {product.price}</span>
          {
            React.Children.map(children, child => {
              const childClone = React.cloneElement(child, {product})
              return childClone
            })
          }
        </div>
      </div>

      <div className="px-6 py-2">
        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{product.category}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
