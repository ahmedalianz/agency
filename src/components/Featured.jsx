import {
  Button,
  Container,
  Desc,
  Image,
  Left,
  Right,
  SubTitle,
  Title,
} from "styles/Featured";

import AnimatedShapes from "./AnimatedShapes";
import React from "react";

export default function Featured() {
  return (
    <Container>
      <Left>
        <Image src="images/design.webp" alt="" />
      </Left>
      <Right>
        <Title>
          <b>Good</b> design
          <br />
          <b>Good</b> business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
}
