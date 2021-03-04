import { Icon, IconProps, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Basket: React.FC<IconProps> = ({
  fontSize = ["lg", "lg", "lg", "xl"],
  ...rest
}) => {
  const bodyColor = useBreakpointValue({ base: "none", lg: "currentColor" });

  return (
    <Icon viewBox="0 0 16 20" fill="none" fontSize={fontSize} {...rest}>
      <path
        stroke="currentColor"
        strokeWidth="0.8"
        d="M1.153 16.38L2.245 4.313h11.662c.297 3.403.926 10.58 1.072 12.067.145 1.488-.99 2.291-1.577 2.507H2.77c-1.439-.308-1.677-1.8-1.617-2.507z"
        fill={bodyColor}
      ></path>
      <path
        stroke="currentColor"
        strokeWidth="0.8"
        d="M4.834 6.415V3.342c0-3.708 6.264-3.87 6.468 0v3.073"
      ></path>
    </Icon>
  );
};
export default Basket;
