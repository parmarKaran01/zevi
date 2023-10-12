import { useContext, useState } from "react";
import { constants } from "../helper";
import { ProductContext } from "../context/ProductContext";
import { Product } from "../types";
import StarRating from "./StarRating";
import useWindowSize from "../hooks/useWindowSize";

type ProductProps = {
  product: Product;
};

const ProductComponent = ({ product }: ProductProps) => {
  const { addToWishlist, isAddedToWishlist } = useContext(ProductContext);
  const [showProductButton, setShowProductButton] = useState(false);
  const { width } = useWindowSize();

  return (
    <div
      className={`w-[200px] rounded-md overflow-hidden relative ${
        width <= 500 ? "w-[90%]" : ""
      }`}
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
        <span className="text-blue-400 font-semibold text-lg">
          Rs.
          {parseInt(product.price) -
            Math.ceil(
              (parseInt(product.discount) / parseInt(product.price)) * 100
            )}
        </span>
      </div>

      <StarRating
        rating={parseInt(product.rating)}
        count={parseInt(product.ratingCount)}
      />
    </div>
  );
};

export default ProductComponent;
