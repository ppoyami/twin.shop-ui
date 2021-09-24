import { useState } from 'react';
import tw, { css, styled } from 'twin.macro';

import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

import { sliderItems } from '@/constants';

export default function Slider() {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex(prevIndex =>
      prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1,
    );
  };
  const prev = () => {
    setIndex(prevIndex =>
      prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1,
    );
  };
  return (
    <Container>
      <Arrow direction="left" onClick={prev}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={index}>
        {sliderItems.map(item => (
          <Slide key={item.id} bgColor={item.bg}>
            <Content css={tw`h-full`}>
              <Image src={item.img} alt="img" />
            </Content>
            <Content css={tw`p-10`}>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button type="submit">SHOW NOW</Button>
            </Content>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={next}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

const Container = styled.div(() => [
  tw`relative w-full h-screen flex overflow-hidden`,
]);

const Wrapper = styled.div(({ slideIndex }) => [
  tw`h-full flex`,
  css`
    transition: all 1.5s ease;
    transform: translateX(${-100 * slideIndex}vw);
  `,
]);

const Slide = styled.div(({ bgColor }) => [
  tw`w-screen h-screen flex items-center`,
  css`
    background-color: ${bgColor};
  `,
]);

const Content = styled.div(() => [tw`flex-1`]);
const Image = styled.img(() => [tw`h-4/5`]);

const Title = styled.h1(() => [tw`text-7xl font-bold`]);
const Desc = styled.p(() => [tw`mt-12 mb-10 text-xl tracking-wide`]);
const Button = styled.button(() => [
  tw`px-4 py-2 text-xl border-2 border-black`,
]);

const Arrow = styled.div(({ direction }) => [
  tw`bg-transparent w-12 h-12 rounded-full flex items-center 
    justify-center absolute top-1/2 transform -translate-y-1/2 z-10 cursor-pointer opacity-50`,
  direction === 'right' && tw`right-3`,
  direction === 'left' && tw`left-3`,
]);
