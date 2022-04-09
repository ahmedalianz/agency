import styled, { css } from "styled-components";

import Contact from "components/Contact";
import Featured from "components/Featured";
import Footer from "components/Footer";
import Hero from "components/Hero";
import Navbar from "components/Navbar";
import Pricing from "components/Pricing";
import Services from "components/Services";

export default function About() {
  const Container = styled.div`
    position: relative;
    overflow: hidden;
  `;
  const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  `;

  const HeroShapes = styled.div`
    ${Shape}
    clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
    background-color: crimson;
  `;
  const FeatureShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
    background-color: pink;
  `;
  const ServiceShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
    background-color: #f88497;
  `;
  const PricesShape = styled.div`
    ${Shape}
    clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
    background-color: crimson;
  `;
  const ContactShape = styled.div`
    ${Shape}
    clip-path: polygon(67% 0, 100% 100%, 100% 0);
    background-color: pink;
  `;

  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <HeroShapes />
      </Container>
      <Container>
        <Featured />
        <FeatureShape />
      </Container>
      <Container>
        <Services />
        <ServiceShape />
      </Container>
      <Container>
        <Pricing />
        <PricesShape />
      </Container>
      <Container>
        <Contact />
        <ContactShape />
        <Footer />
      </Container>
    </>
  );
}
