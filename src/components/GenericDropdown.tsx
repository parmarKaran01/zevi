import React, { useState } from "react";
import { constants } from "../helper";

type GenericDropdownProps = {
  Header: React.ReactNode;
  Content: React.ReactNode;
};
const GenericDropdown = ({ Header, Content }: GenericDropdownProps) => {
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
  return (
    <div className="my-6 flex flex-col gap-3">
      <div
        onClick={() => setIsContentVisible(!isContentVisible)}
        className="flex items-center cursor-pointer justify-between"
      >
        {Header}{" "}
        <img
          src={
            isContentVisible ? constants.img.arrowUp : constants.img.arrowDown
          }
          className="h-4 w-4"
        />
      </div>
      {isContentVisible ? Content : null}
    </div>
  );
};

export default GenericDropdown;
