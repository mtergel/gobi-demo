import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const Close: React.FC<IconProps> = ({
  fontSize = ["lg", "lg", "lg", "xl"],
  ...rest
}) => {
  return (
    <Icon viewBox="0 0 21 22" fill="none" fontSize={fontSize} {...rest}>
      <path
        stroke="currentColor"
        d="M5.73 15.913L15.752 5.89M5.495 5.654l10.493 10.493"
      ></path>
    </Icon>
  );
};
export default Close;
