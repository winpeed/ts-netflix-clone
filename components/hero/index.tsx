import React from "react";
import { ComponentProps, InputProps } from "../../interfaces/interfaces";
import {
  Container,
  MainHeading,
  BodyText,
  Form,
  FormInput,
  FormButton,
} from "./styles/Hero";

export default function Hero({ children, ...restProps }: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.MainHeading = function HeroMainHeading({
  children,
  ...restProps
}: ComponentProps) {
  return <MainHeading {...restProps}>{children}</MainHeading>;
};

Hero.BodyText = function HeroBodyText({
  children,
  ...restProps
}: ComponentProps) {
  return <BodyText {...restProps}>{children}</BodyText>;
};

Hero.Form = function HeroForm({ children, ...restProps }: ComponentProps) {
  return <Form {...restProps}>{children}</Form>;
};

Hero.FormInput = function HeroFormInput({ ...restProps }: InputProps) {
  return <FormInput {...restProps} />;
};

Hero.FormButton = function HeroFormButton({
  children,
  ...restProps
}: ComponentProps) {
  return <FormButton {...restProps}>{children}</FormButton>;
};
