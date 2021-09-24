import tw, { styled, css } from 'twin.macro';
import { Send } from '@material-ui/icons';

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div(() => [
  tw`flex flex-col items-center justify-center`,
  css`
    height: 60vh;
    background-color: #fcf5f5;
  `,
]);
const Title = styled.h1(() => [tw`text-7xl mb-5`]);
const Desc = styled.p(() => [tw`text-2xl font-light mb-5`]);
const InputContainer = styled.div(() => [
  tw`w-1/2 h-10 bg-white flex justify-between border-2`,
]);
const Input = styled.input(() => [tw`flex[8] pl-2 outline-none`]);
const Button = styled.button(() => [tw`flex-1 bg-green-600 text-white`]);
