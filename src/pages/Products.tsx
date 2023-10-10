import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export interface Product {
  _id: string;
  image: string;
  price: string;
  discount: string;
  title: string;
  description: string;
  rating: string;
  ratingCount: string;
}

const Products = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="w-full p-4">
      <h2>Search Results</h2>
      <div className="w-full flex">
        <Filters />
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Products;
