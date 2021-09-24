import tw, { styled, css } from 'twin.macro';
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> 622 Dixie Path , South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}
// * 컨테이너 디자인
const Container = styled.div(() => [tw`flex`]);
const Left = styled.div(() => [tw`flex-1 flex flex-col p-5`]);
const Center = styled.div(() => [tw`flex-1 p-5`]);
const Right = styled.div(() => [tw`flex-1 p-5`]);
// * Left
const Logo = styled.h1(() => [tw`text-3xl font-bold`]);
const Desc = styled.p(() => [tw`my-5`]);
const SocialContainer = styled.div(() => [tw`flex space-x-3`]);
const SocialIcon = styled.div(({ color }) => [
  tw`w-10 h-10 rounded-full flex items-center justify-center text-white `,
  css`
    background-color: ${color};
  `,
]);
// * Center
const Title = styled.h1(() => [tw`text-xl font-bold mb-7`]);
const List = styled.ul(() => [tw`flex flex-wrap mb-3`]);
const ListItem = styled.li(() => [tw`w-1/2`]);
// * Right
const ContactItem = styled.div(() => [tw`mb-7 flex items-center`]);
const Payment = styled.img(() => [tw`w-1/2`]);
