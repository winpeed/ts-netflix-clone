import React from "react";
import {
  ComponentProps,
  ListButtonProps,
  SectionProps,
} from "../../interfaces/interfaces";
import {
  Container,
  FaqContent,
  Content,
  Heading,
  Text,
  ImageWrapper,
  ContentWrapper,
  List,
  ListItem,
  ListButton,
  ListContent,
} from "./styles/BodySection";

export default function BodySection({
  children,
  ...restProps
}: ComponentProps) {
  return <Container {...restProps}>{children}</Container>;
}

BodySection.Content = function BodySectionContent({
  children,
  ...restProps
}: SectionProps) {
  return <Content {...restProps}>{children}</Content>;
};

BodySection.FaqContent = function BodySectionFaqContent({
  children,
  ...restProps
}: ComponentProps) {
  return <FaqContent {...restProps}>{children}</FaqContent>;
};

BodySection.Heading = function BodySectionHeading({
  children,
  ...restProps
}: ComponentProps) {
  return <Heading {...restProps}>{children}</Heading>;
};

BodySection.Text = function BodySectionText({
  children,
  ...restProps
}: ComponentProps) {
  return <Text {...restProps}>{children}</Text>;
};

BodySection.ContentWrapper = function BodySectionContentWrapper({
  children,
  ...restProps
}: ComponentProps) {
  return <ContentWrapper {...restProps}>{children}</ContentWrapper>;
};

BodySection.ImageWrapper = function BodySectionImageWrapper({
  children,
  ...restProps
}: ComponentProps) {
  return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
};

BodySection.List = function BodySectionList({
  children,
  ...restProps
}: ComponentProps) {
  return <List {...restProps}>{children}</List>;
};

BodySection.ListItem = function BodySectionListItem({
  children,
  ...restProps
}: ComponentProps) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

BodySection.ListButton = function BodySectionListButton({
  children,
  ...restProps
}: ListButtonProps) {
  return <ListButton {...restProps}>{children}</ListButton>;
};

BodySection.ListContent = function BodySectionListContent({
  children,
  ...restProps
}: ComponentProps) {
  return <ListContent {...restProps}>{children}</ListContent>;
};
