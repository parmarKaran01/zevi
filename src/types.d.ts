import { Product } from "./pages/Products";

export type ProductContextType = {
  products: Product[];
  addToWishlist: (Product: Product) => void;
  wishlist: Product[];
  isAddedToWishlist: (id: string) => boolean;
  brandFilterNames : string[]
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

