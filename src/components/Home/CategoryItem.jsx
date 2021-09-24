import tw, { styled, css } from 'twin.macro';
import PropTypes from 'prop-types';

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>shop now</Button>
      </Info>
    </Container>
  );
}

CategoryItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

const Container = styled.div(() => [
  tw`flex-1 m-2 relative`,
  css`
    height: 70vh;
  `,
]);
const Image = styled.img(() => [tw`w-full h-full object-cover`]);
const Info = styled.div(() => [
  tw`absolute top-0 bottom-0 w-full h-full flex flex-col items-center justify-center`,
]);
const Title = styled.h1(() => [tw`text-white text-3xl font-bold mb-6`]);
const Button = styled.button(() => [
  tw`p-3 bg-white text-gray-500 cursor-pointer font-bold uppercase`,
]);
