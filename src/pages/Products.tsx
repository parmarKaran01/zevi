import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import useWindowSize from "../hooks/useWindowSize";
import Search from "../components/Search";

const Products = () => {
  const { products, setShowFilterDrawer, query, setQuery, clearFilters } =
    useContext(ProductContext);
  const { width } = useWindowSize();
  return (
    <div className="w-full py-4 px-8 bg-white">
      {width < 800 ? (
        <div className="flex items-center justify-center py-2">
          <Search query={query} setQuery={setQuery} />
        </div>
      ) : null}

      <div className="flex items-center gap-4 justify-between mb-4">
        <h2 className="md:text-3xl">Search Results</h2>
        {width < 800 ? (
          <>
            <button onClick={() => setShowFilterDrawer((prev) => !prev)}>
              Filters ⚙️
            </button>
            <button onClick={() => clearFilters()}>Clear Filter ✖</button>
          </>
        ) : null}
      </div>
      <div className="w-full flex">
        <Filters />
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Products;
