import { Product } from "./pages/Products";

export type ProductContextType = {
  products: Product[];
  addToWishlist: (Product: Product) => void;
  wishlist: Product[];
  isAddedToWishlist: (id: string) => boolean;
  brandFilterNames : string[];
  handleBrandChange : (event : React.ChangeEvent<HTMLInputElement>) => void
  handlePriceChange : (event : React.ChangeEvent<HTMLInputElement>) => void
  handleRatingChange : (event : React.ChangeEvent<HTMLInputElement>) => void
  priceFilter : {
    [index: string]: number;
    // name : string;
  }
  query : string 
  setQuery : React.Dispatch<React.SetStateAction<string>>
  selectedRating : number | null
};

export type WishlistMap = {
  _id: string;
};

export type Product = {
  _id: string;
  image: string;
  price: string;
  discount: string;
  title: string;
  description: string;
  rating: string;
  ratingCount: string;
  brand: string;
};

