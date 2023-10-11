import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { constants } from "../helper";
import GenericDropdown from "./GenericDropdown";

type FilterHeaderComponentProps = {
  name: string;
};

const FilterHeaderComponent = ({ name }: FilterHeaderComponentProps) => {
  return (
    <div>
      <h2 className="text-lg uppercase text-slate-700">{name}</h2>
      
    </div>
  );
};

const Filters = () => {
  const { brandFilterNames, handleBrandChange } = useContext(ProductContext);
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


      {/* price range filter */}

      <GenericDropdown
        Header={<FilterHeaderComponent name={"Price Range"} />}
        Content={
          <div className="flex flex-col">
            {constants.priceRange.map((item, index) => {
              return (
                <div className="flex items-center gap-2">
                  <input
                    key={index}
                    type="checkbox"
                    id={item.range}
                    value={item.range}
                    className="cursor-pointer"
                    name="brand"
                    onChange={handleBrandChange}
                  />
                  <label htmlFor={item.range}>{item.range}</label>
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
