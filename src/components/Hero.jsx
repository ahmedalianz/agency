import {
  Button,
  Contact,
  ContactText,
  Container,
  Desc,
  Image,
  Info,
  Left,
  Phone,
  Right,
  Title,
} from "styles/Hero";

import AnimatedShapes from "./AnimatedShapes";
import React from "react";

export default function Hero() {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us (012) 345 - 6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src="images/woman.png" alt="hero" />
      </Right>
      <AnimatedShapes />
    </Container>
  );
}
