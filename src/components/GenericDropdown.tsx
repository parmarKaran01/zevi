import React, { useState } from "react";
import ArrowUp from "../assets/arrow-up.svg"
import ArrowDown from "../assets/arrow-down.svg"

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
            isContentVisible ? ArrowUp: ArrowDown
          }
          className="h-4 w-4"
        />
      </div>
      {isContentVisible ? Content : null}
    </div>
  );
};

export default GenericDropdown;
