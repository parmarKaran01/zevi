import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";


const Products = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="w-full py-4 px-8">
      <h2 className="text-3xl">Search Results</h2>
      <div className="w-full flex">
        <Filters />
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Products;
