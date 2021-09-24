import tw, { styled } from 'twin.macro';

import { popularProducts } from '@/constants';
import ProductItem from './ProductItem';

export default function Products() {
  return (
    <Container>
      {popularProducts.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Container>
  );
}

const Container = styled.div(() => [tw`p-5 flex flex-wrap`]);
