import React from "react";
import ProductComponent from "./Product";
import { Product } from "../types";

type ProductListProps = {
  products: Product[];
};
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex flex-wrap gap-12 overflow-y-auto items-center justify-center bg-slate-200 w-full">
      {products.map((item) => {
        return <ProductComponent product={item} key={item._id} />;
      })}
    </div>
  );
};

export default ProductList;
