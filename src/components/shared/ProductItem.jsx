import tw, { styled, css } from 'twin.macro';
import PropTypes from 'prop-types';
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';

export default function ProductItem({ item }) {
  return (
    <Container className="group">
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
      </Info>
    </Container>
  );
}

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
  }).isRequired,
};

const Container = styled.div(() => [
  tw`flex-1 m-2 h-72 flex items-center justify-center relative bg-gray-100`,
  css`
    min-width: 280px;
  `,
]);
const Circle = styled.div(() => [tw`w-48 h-48 rounded-full bg-white absolute`]);
const Image = styled.img(() => [tw`h-4/5 z-10`]);
const Info = styled.div(() => [
  tw`opacity-0 group-hocus:opacity-100 w-full h-full bg-black bg-opacity-20 absolute top-0 left-0 flex items-center justify-center z-10 
  transition-all duration-200 ease-linear space-x-4`,
]);
const Icon = styled.div(() => [
  tw`hover:(transform scale-110) w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-200 ease-linear`,
]);
