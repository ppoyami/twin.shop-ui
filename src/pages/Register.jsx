import tw, { styled, css } from 'twin.macro';

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div(() => [
  tw`w-screen h-screen bg-cover flex items-center justify-center`,
  css`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
      center;
  `,
]);
const Wrapper = styled.div(() => [tw`w-3/5 p-5 bg-white`]);
const Form = styled.form(() => [tw`flex flex-wrap`]);

const Title = styled.h1(() => [tw`text-2xl`]);
const Input = styled.input(() => [tw`flex-1 border-2 p-2 mt-5 mr-3`]);
const Agreement = styled.p(() => [tw`text-xs font-bold mt-5`]);
const Button = styled.button(() => [
  tw`w-2/5 py-4 px-6 border-2 bg-green-700 text-white mt-5`,
]);
