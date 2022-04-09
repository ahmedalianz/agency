import {
  Button,
  CardContainer,
  List,
  ListItem,
  Price,
  PriceContainer,
  Type,
} from "styles/Pricing";

import React from "react";

export default function PriceCard({ price, type }) {
  return (
    <CardContainer>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>{" "}
      </List>
      <Button>Join Now</Button>
    </CardContainer>
  );
}
