import tw from 'twin.macro';

export default function Announcement() {
  return (
    <div
      css={tw`h-8 bg-green-600 text-white flex justify-center items-center text-sm font-semibold`}>
      <span>Super Deal! Free Shipping on Orders Over $50</span>
    </div>
  );
}
