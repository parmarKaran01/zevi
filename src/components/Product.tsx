import React, { useContext, useState } from "react";
import { constants } from "../helper";
import { ProductContext } from "../context/ProductContext";
import { Product } from "../types";

type ProductProps = {
  product: Product;
};

const ProductComponent = ({ product }: ProductProps) => {
  const { addToWishlist, wishlist, isAddedToWishlist } =
    useContext(ProductContext);
  const [showProductButton, setShowProductButton] = useState(false);

  return (
    <div
      className="w-[200px] rounded-md overflow-hidden relative shadow-sm"
      onMouseEnter={() => setShowProductButton(true)}
      onMouseLeave={() => setShowProductButton(false)}
    >
      <img
        src={
          isAddedToWishlist(product._id)
            ? constants.img.heartFilled
            : constants.img.heartHollow
        }
        className="absolute right-2 top-2 w-6 h-6 cursor-pointer z-10"
        onClick={() => addToWishlist(product)}
      />
      <div className="relative flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-[300px]"
        />
        {showProductButton ? (
          <button className="absolute left-0 bottom-0 w-full py-3 bg-blue-400 opacity-70 text-white">
            View Product
          </button>
        ) : null}
      </div>
      <h3 className="font-semibold mt-4 text-ellipsis whitespace-nowrap">
        {product.title}
      </h3>
      <div className="flex items-center gap-2">
        <span className="line-through">Rs.{product.price}</span>
        <span>
          Rs.
          {parseInt(product.price) -
            Math.ceil(
              (parseInt(product.discount) / parseInt(product.price)) * 100
            )}
        </span>
      </div>
    </div>
  );
};

export default ProductComponent;
