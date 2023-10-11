import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { constants } from "../helper";
import GenericDropdown from "./GenericDropdown";

type FilterHeaderComponentProps = {
  name: string;
};

type priceFilterContentType = {
  index: number;
  item: string;
  handlePriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  priceFilter: {
    [index: string]: number;
    // name : string;
  };
};

const FilterHeaderComponent = ({ name }: FilterHeaderComponentProps) => {
  return (
    <div>
      <h2 className="text-lg uppercase text-slate-700">{name}</h2>
    </div>
  );
};

const PriceFilterContent = ({
  index,
  item,
  handlePriceChange,
  priceFilter,
}: priceFilterContentType) => {
  const priceRangeCopy: {
    [index: string]: {
      [index: string]: number;
    };
  } = constants.priceRange;
  return (
    <div className="flex items-center gap-2">
      <input
        key={index}
        type="checkbox"
        id={item}
        value={item}
        className="cursor-pointer"
        name="brand"
        onChange={handlePriceChange}
        checked={priceFilter.max === priceRangeCopy[item].max}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  );
};

const Filters = () => {
  const {
    brandFilterNames,
    handleBrandChange,
    handlePriceChange,
    priceFilter,
  } = useContext(ProductContext);

  return (
    <div className="w-[400px] pr-12">
      {/* brand filter */}
      <GenericDropdown
        Header={<FilterHeaderComponent name={"Brand"} />}
        Content={
          <div className="flex flex-col">
            {brandFilterNames.map((item, index) => {
              return (
                <div className="flex items-center gap-2">
                  <input
                    key={index}
                    type="checkbox"
                    id={item}
                    value={item}
                    className="cursor-pointer"
                    name="price"
                    onChange={handleBrandChange}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              );
            })}
          </div>
        }
      />

      {/* price range filter */}

      <GenericDropdown
        Header={<FilterHeaderComponent name={"Price Range"} />}
        Content={
          <div className="flex flex-col">
            {Object.keys(constants.priceRange).map((item, index) => {
              return (
                <PriceFilterContent
                  item={item}
                  index={index}
                  handlePriceChange={handlePriceChange}
                  priceFilter={priceFilter}
                />
              );
            })}
          </div>
        }
      />
    </div>
  );
};

export default Filters;
