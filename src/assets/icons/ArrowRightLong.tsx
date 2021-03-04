import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const ArrowRightLong: React.FC<IconProps> = ({
  fontSize = ["lg", "lg", "lg", "xl"],
  ...rest
}) => {
  return (
    <Icon viewBox="0 0 19 12" fill="none" fontSize={fontSize} {...rest}>
      <path
        stroke="currentColor"
        d="M12.282 11.304l5.192-5.192L12.282.921M17.169 6.112H.612"
      ></path>
    </Icon>
  );
};
export default ArrowRightLong;
