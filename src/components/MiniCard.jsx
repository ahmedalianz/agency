import { CardImage, CardInnerContainer, Text } from "styles/Services";

import React from "react";

export default function MiniCard() {
  return (
    <CardInnerContainer>
      <CardImage src="images/search.png" />
      <Text>Lorem ipsum dolor sit amet consectetur.</Text>
    </CardInnerContainer>
  );
}
