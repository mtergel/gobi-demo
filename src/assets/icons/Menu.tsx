import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const Menu: React.FC<IconProps> = ({
  fontSize = ["lg", "lg", "lg", "xl"],
  ...rest
}) => {
  return (
    <Icon viewBox="0 0 22 16" fill="none" fontSize={fontSize} {...rest}>
      <path
        stroke="currentColor"
        d="M.992 1.313h20.38M.992 8.26H18.13M.992 15.209h20.38"
      />
    </Icon>
  );
};
export default Menu;
