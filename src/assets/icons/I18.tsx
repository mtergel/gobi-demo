import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

interface I18Props extends IconProps {
  stroke?: string;
  fontSize?: string;
}

const I18: React.FC<I18Props> = ({
  stroke = "white",
  fontSize = "lg",
  ...rest
}) => {
  return (
    <Icon
      viewBox="0 0 19 18"
      color={stroke}
      fill="none"
      fontSize={fontSize}
      {...rest}
    >
      <path
        stroke="currentColor"
        strokeWidth="0.8"
        d="M9.992.556v17.072M18.528 9.093H1.456M17.136 4.083H2.94M17.136 13.918H2.94"
      />
      <circle
        cx="9.992"
        cy="9"
        r="8.6"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        stroke="currentColor"
        strokeWidth="0.8"
        d="M9.992.371C6.22 2.97.936 10.058 9.992 17.63M9.992.371c3.773 2.598 9.055 9.687 0 17.258"
      />
    </Icon>
  );
};
export default I18;
