import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useContext, useEffect, useRef } from "react";

type SuggestionBoxProps = {
  setShowSuggestion: React.Dispatch<React.SetStateAction<boolean>>;
};

const SuggestionBox = ({ setShowSuggestion }: SuggestionBoxProps) => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestion(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div
      className="md:w-3/5 w-[90%] min-h-[400px] bg-slate-100 p-8 rounded-md shadow-lg flex flex-col gap-4"
      ref={searchRef}
    >
      <div>
        <h2 className="text-xl font-semibold mb-2">Latest Trends</h2>
        <div className="flex items-center justify-between overflow-x-auto gap-4">
          {products.slice(0, 5).map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-col shrink-0 w-[120px] overflow-hidden cursor-pointer"
                onClick={() => navigate("/products")}
              >
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="w-[120px] h-[150px]"
                />
                <p className="text-ellipsis whitespace-nowrap w-full">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Popular suggestions</h2>
        {products.slice(0, 5).map((item) => {
          return (
            <div onClick={() => navigate("/products")} key={item._id} className="cursor-pointer">
              {item.brand}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestionBox;
