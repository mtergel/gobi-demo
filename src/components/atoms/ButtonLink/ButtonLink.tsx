import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

interface ButtonLinkProps extends LinkProps {
  href?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href = "#",
  children,
  ...rest
}) => {
  return (
    <NextLink href={href} passHref>
      <Link px={0.5} borderRadius="6rem" {...rest}>
        {children}
      </Link>
    </NextLink>
  );
};
export default ButtonLink;
