import React from "react";
import { ComponentProps, TextProps } from "../../interfaces/interfaces";
import { Container, List, ListItem, Text } from "./styles/Footer";

export default function Footer({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.List = function FooterList({ children, ...restProps }: ComponentProps) {
  return <List {...restProps}>{children}</List>;
};

Footer.ListItem = function FooterListItem({
  children,
  ...restProps
}: ComponentProps) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Footer.Text = function FooterText({ children, ...restProps }: TextProps) {
  return <Text {...restProps}>{children}</Text>;
};
