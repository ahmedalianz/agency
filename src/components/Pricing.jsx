import { Container } from "styles/Pricing";
import PriceCard from "./PriceCard";

export default function Pricing() {
  return (
    <Container>
      <PriceCard price="10" type="Basic" />
      <PriceCard price="20" type="Premium" />
      <PriceCard price="30" type="Advanced" />
    </Container>
  );
}
