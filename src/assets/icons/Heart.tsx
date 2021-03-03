//
import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const Heart: React.FC<IconProps> = ({
  fontSize = ["lg", "lg", "lg", "xl"],
  ...rest
}) => {
  return (
    <Icon viewBox="0 0 19 18" fill="none" fontSize={fontSize} {...rest}>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="0.8"
        d="M9.429 16.78C7.292 14.864-.041 9.813.777 5.093 1.311 1.81 3.412.704 4.907.667 7.862.557 9.43 3.212 9.43 3.212S10.995.557 13.95.667c1.495.037 3.596 1.143 4.165 4.425.784 4.72-6.55 9.771-8.686 11.689z"
      ></path>
    </Icon>
  );
};
export default Heart;
