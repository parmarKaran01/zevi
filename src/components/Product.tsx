import React, { useContext } from "react";
import { constants } from "../helper";
import { ProductContext } from "../context/ProductContext";
import { Product } from "../types";

type ProductProps = {
  product: Product;
};

const ProductComponent = ({ product }: ProductProps) => {
  const { addToWishlist, wishlist, isAddedToWishlist } =
    useContext(ProductContext);

  return (
    <div className="w-[200px] rounded-md overflow-hidden relative shadow-sm">
      <img
        src={
          isAddedToWishlist(product._id)
            ? constants.img.heartFilled
            : constants.img.heartHollow
        }
        className="absolute right-2 top-2 w-6 h-6 cursor-pointer"
        onClick={() => addToWishlist(product)}
      />
      <img
        src={product.image}
        alt={product.title}
        className="object-cover w-full h-[300px]"
      />
      <h3 className="font-semibold mt-4">{product.title}</h3>
      <div className="flex items-center gap-2">
        <span className="line-through">Rs.{product.price}</span>
        <span>
          Rs.
          {Math.floor(parseInt(product.discount) / parseInt(product.price)) *
            100}
        </span>
      </div>
    </div>
  );
};

export default ProductComponent;
