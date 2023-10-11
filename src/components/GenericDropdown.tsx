import React, { useState } from "react";

type GenericDropdownProps = {
  Header: React.ReactNode;
  Content: React.ReactNode;
};
const GenericDropdown = ({ Header, Content }: GenericDropdownProps) => {
  const [isContentVisible, setIsContentVisible] = useState<boolean>(true);
  return (
    <div>
      {Header}
      {isContentVisible ? Content : null}
    </div>
  );
};

export default GenericDropdown;
