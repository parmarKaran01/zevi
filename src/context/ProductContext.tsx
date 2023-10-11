import React, { useState, useEffect } from "react";
import { Product, ProductContextType } from "../types";
import { faker } from "@faker-js/faker";
export const ProductContext = React.createContext<ProductContextType>({
  products: [],
  addToWishlist: () => {},
  wishlist: [],
  isAddedToWishlist: () => false,
  brandFilterNames: [],
});

const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [brandFilterNames, setBrandFilterNames] = useState<string[]>([]);

  function createRandomProduct(): Product {
    return {
      _id: faker.string.uuid(),
      image: faker.image.avatar(),
      price: faker.finance.amount(500, 1000, 0),
      discount: faker.finance.amount(5, 10, 0),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      rating: faker.finance.amount({ min: 0, max: 5, dec: 1 }),
      ratingCount: faker.finance.amount(5, 250, 0),
      brand: faker.company.name(),
    };
  }

  const getProducts = async () => {
    // try {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log("data", data);
    //   setProducts(data);
    // } catch (error) {
    //   console.log("err", error);
    // }
    let array: Product[] = [];
    for (let i = 0; i < 20; i++) {
      array.push(createRandomProduct());
      setProducts(array);
    }
  };

  console.log("products", products);

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

  //   const brandFilterNames = () : string[] => {
  //     return products.map((item) => item.brand) || [];
  //   };

  useEffect(() => {
    let brandArray = products?.map((item) => item.brand) || [];
    setBrandFilterNames(brandArray);
  }, [products]);

  const isAddedToWishlist = (_id: string) => {
    return !!wishlist.find((singleProduct) => singleProduct._id === _id);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addToWishlist,
        wishlist,
        isAddedToWishlist,
        brandFilterNames,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
