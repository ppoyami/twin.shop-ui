import tw, { styled, css } from 'twin.macro';
import { Add, Remove } from '@material-ui/icons';
import Announcement from '@/components/shared/Announcement';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Newsletter from '@/components/shared/Newsletter';

export default function Detail() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

// * 컨테이너
const Container = styled.div(() => [tw``]);
const Wrapper = styled.div(() => [tw`flex p-10`]);
const ImageContainer = styled.div(() => [tw`flex-1`]);
const InfoContainer = styled.div(() => [tw`flex-1 px-10`]);

const Image = styled.img(() => [
  tw`w-full object-cover`,
  css`
    height: 90vh;
  `,
]);

const Title = styled.h1(() => [tw`text-4xl font-light`]);
const Desc = styled.p(() => [tw`my-5`]);
const Price = styled.span(() => [tw`text-5xl font-light`]);

const FilterContainer = styled.div(() => [tw`flex w-1/2 justify-between my-7`]);
const Filter = styled.div(() => [tw`flex items-center space-x-3`]);
const FilterTitle = styled.h1(() => [tw`text-xl font-light`]);
const FilterColor = styled.div(({ color }) => [
  tw`w-6 h-6 rounded-full`,
  css`
    background-color: ${color};
  `,
]);
const FilterSize = styled.select(() => [tw`border-2 border-black p-1`]);
const FilterSizeOption = styled.option(() => [tw``]);

const AddContainer = styled.div(() => [
  tw`flex items-center w-1/2 justify-between`,
]);
const AmountContainer = styled.div(() => [tw`text-xl flex items-center`]);
const Amount = styled.span(() => [
  tw`p-2 w-10 h-10 border-2 border-black mx-2 rounded-lg flex items-center justify-center`,
]);
const Button = styled.button(() => [tw`border-2 border-green-600 p-4`]);
