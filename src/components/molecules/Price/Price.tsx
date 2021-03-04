import { Heading, HeadingProps } from "@chakra-ui/react";
import NumberFormat from "react-number-format";

interface PriceProps extends HeadingProps {
  value: number;
  currencySymbol?: string;
}
const Price: React.FC<PriceProps> = ({
  value,
  currencySymbol = "$",
  ...rest
}) => {
  return (
    <Heading {...rest} backgroundColor="transparent">
      <NumberFormat
        value={value}
        thousandSeparator={true}
        prefix={currencySymbol}
        displayType="text"
        style={{
          backgroundColor: "transparent",
        }}
      />
    </Heading>
  );
};

export default Price;
