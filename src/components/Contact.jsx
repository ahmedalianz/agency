import {
  AddressContainer,
  AddressItem,
  Button,
  Container,
  Form,
  FormContainer,
  Icon,
  Input,
  LeftForm,
  RightForm,
  Text,
  TextArea,
  Title,
  Wrapper,
} from "styles/Contact";

import AnimatedShapes from "./AnimatedShapes";

export default function Contact() {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src="images/map.png" />
            <Text>123 Banha Egypt</Text>
          </AddressItem>
          <AddressItem>
            <Icon src="images/phone.png" />
            <Text>+20 1099019685</Text>
            <Text>+20 1099019685</Text>
          </AddressItem>
          <AddressItem>
            <Icon src="images/send.png" />
            <Text>ahmedalian400@gmail.com</Text>
            <Text>ahmedalian400@gmail.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
      <AnimatedShapes />
    </Container>
  );
}
