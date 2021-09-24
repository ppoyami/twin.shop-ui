import tw from 'twin.macro';

import { Search, ShoppingCartOutlined } from '@material-ui/icons';

export default function Navbar() {
  return (
    <div css={tw`h-16 flex items-center px-4`}>
      <div css={tw`flex-1 flex items-center`}>
        <h3 css={tw`uppercase mr-4`}>en</h3>
        <form css={tw` relative`}>
          <input
            css={tw` focus:outline-none border border-gray-400 rounded-md py-1 pl-4 pr-8`}
            placeholder="Search"
          />
          <Search
            css={tw`absolute right-2 top-1/2 transform -translate-y-1/2`}
          />
        </form>
      </div>
      <div css={tw`flex-1 text-center`}>
        <h1 css={tw`uppercase text-4xl font-bold`}>lama.</h1>
      </div>
      <ul css={tw`flex-1 flex justify-end space-x-5`}>
        <li css={tw`uppercase`}>register</li>
        <li css={tw`uppercase`}>sign in</li>
        <li css={tw`relative`}>
          <ShoppingCartOutlined />
          <span
            css={tw`absolute -top-2 -right-2 rounded-full bg-blue-700 text-white text-sm h-5 w-5 flex justify-center items-center`}>
            4
          </span>
        </li>
      </ul>
    </div>
  );
}
