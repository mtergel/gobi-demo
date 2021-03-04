import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const ArrowRightSHort: React.FC<IconProps> = ({
  fontSize = ["lg", "lg", "lg", "xl"],
  ...rest
}) => {
  return (
    <Icon viewBox="0 0 12 12" fill="none" fontSize={fontSize} {...rest}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.87"
        d="M5.957.519l5 5-5 5M.957 5.519h10"
      ></path>
    </Icon>
  );
};
export default ArrowRightSHort;
