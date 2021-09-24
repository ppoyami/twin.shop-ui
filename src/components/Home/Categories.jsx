import tw, { styled } from 'twin.macro';
import { categories } from '@/constants';
import CategoryItem from './CategoryItem';

export default function Categories() {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
}

const Container = styled.div(() => [tw`flex p-5 justify-between`]);
