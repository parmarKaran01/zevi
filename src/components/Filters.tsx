import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { constants } from "../helper";
import GenericDropdown from "./GenericDropdown";

type FilterHeaderComponentProps = {
  name: string;
};

const FilterHeaderComponent = ({ name }: FilterHeaderComponentProps) => {
  return (
    <div className="flex items-center justify-between px-4 cursor-pointer">
      <h2>{name}</h2>
      <img src={constants.img.arrowDown} className="h-4 w-4" />
    </div>
  );
};

const Filters = () => {
  const { brandFilterNames } = useContext(ProductContext);
  const [brandFilter, setBrandFilter] = useState<{ [index: string]: boolean }>(
    {}
  );

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brandName = event.target.value;
    let map = { ...brandFilter };
    if (map[brandName]) {
      delete map[brandName]
    } else {
      map[brandName] = true;
    }

    setBrandFilter(map);
  };
  console.log("map", brandFilter)
  return (
    <div className="w-[400px]">
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
                    name="brand"
                    onChange={handleBrandChange}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              );
            })}
          </div>
        }
      />
    </div>
  );
};

export default Filters;
