import React from "react";
import { ComponentProps } from "../../interfaces/interfaces";
import { Container, Button } from "./styles/Nav";

export default function Nav({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Nav.Button = function NavButton({ children, ...restProps }: ComponentProps) {
  return <Button {...restProps}>{children}</Button>;
};
