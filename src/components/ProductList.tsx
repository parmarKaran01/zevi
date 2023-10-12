import ProductComponent from "./Product";
import { Product } from "../types";

type ProductListProps = {
  products: Product[];
};
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex flex-wrap gap-12 overflow-y-auto justify-evenly w-full h-[75vh]">
      {products.length > 0 ? (
        products.map((item) => {
          return <ProductComponent product={item} key={item._id} />;
        })
      ) : (
        <div>No Products</div>
      )}
    </div>
  );
};

export default ProductList;
