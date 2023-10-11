import React, { useState, useEffect } from "react";
import { Product, ProductContextType } from "../types";
import { faker } from "@faker-js/faker";
import { constants } from "../helper";
export const ProductContext = React.createContext<ProductContextType>({
  products: [],
  addToWishlist: () => {},
  wishlist: [],
  isAddedToWishlist: () => false,
  brandFilterNames: [],
  handleBrandChange: () => {},
  handlePriceChange: () => {},
  handleRatingChange: () => {},
  query: "",
  setQuery: () => {},
  priceFilter: {},
  selectedRating: null,
});

const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [brandFilterNames, setBrandFilterNames] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<{
    [index: string]: string;
  }>({});
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const [priceFilter, setPriceFilter] = useState<{
    [index: string]: number;
    // name : string;
  }>({});

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const range: {
        [index: string]: {
          [index: string]: number;
        };
      } = constants.priceRange;
      setPriceFilter({
        // name: [event.target.value],
        ...range[event.target.value],
      });
    } else {
      setPriceFilter({});
    }
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked){
      setSelectedRating(parseInt(event.target.value));
    }else {
      setSelectedRating(null)
    }
  };

  console.log("priceFilter", priceFilter);

  function createRandomProduct(): Product {
    return {
      _id: faker.string.uuid(),
      image: faker.image.avatar(),
      price: faker.finance.amount(200, 2000, 0),
      discount: faker.finance.amount(5, 10, 0),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      rating: faker.finance.amount({ min: 0, max: 5, dec: 0 }),
      ratingCount: faker.finance.amount(5, 250, 0),
      brand: faker.company.name(),
    };
  }

  const getProducts = async () => {
    let array: Product[] = [];
    for (let i = 0; i < 20; i++) {
      array.push(createRandomProduct());
      setProducts(array);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToWishlist = (item: Product) => {
    let newList: Product[] = [];
    let ele = wishlist.find((singleProduct) => singleProduct._id === item._id);
    if (ele) {
      newList = wishlist.filter(
        (singleProduct) => singleProduct._id !== item._id
      );
    } else {
      newList = [...wishlist, item];
    }
    setWishlist(newList);
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brandName = event.target.value;
    let map = { ...selectedBrands };
    if (map[brandName]) {
      delete map[brandName];
    } else {
      map[brandName] = brandName;
    }

    setSelectedBrands(map);
  };

  console.log("selected brands", selectedBrands);

  useEffect(() => {
    let brandArray = products?.map((item) => item.brand) || [];
    setBrandFilterNames(brandArray);
  }, [products]);

  const isAddedToWishlist = (_id: string) => {
    return !!wishlist.find((singleProduct) => singleProduct._id === _id);
  };

  const FilteredProducts = products.filter((prod) => {
    const min = priceFilter.min;
    const max = priceFilter.max;
    return (
      (prod.brand.includes(selectedBrands[prod.brand]) ||
        Object.keys(selectedBrands).length === 0) &&
      prod.title.toLowerCase().includes(query.toLowerCase()) &&
      ((parseInt(prod.price) <= max && parseInt(prod.price) >= min) ||
        Object.keys(priceFilter).length === 0) && (selectedRating === parseInt(prod.rating) || !!!selectedRating)
    );
  });
  console.log("filtered", FilteredProducts);
  return (
    <ProductContext.Provider
      value={{
        products: FilteredProducts,
        addToWishlist,
        wishlist,
        isAddedToWishlist,
        brandFilterNames,
        handleBrandChange,
        query,
        setQuery,
        handlePriceChange,
        priceFilter,
        selectedRating,
        handleRatingChange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
