import {
  Button,
  Container,
  Left,
  Logo,
  Menu,
  MenuItem,
  Wrapper,
} from "styles/Navbar";

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN TODAY</Button>
      </Wrapper>
    </Container>
  );
}
