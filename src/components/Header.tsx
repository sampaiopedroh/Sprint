import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='bg-gray-800 border-black w-full flex justify-between items-center px-40 py-6'>
      <Link to="/">
        <img
          className='w-[175px]'
          src='https://www.techmahindra.com/themes/custom/techm/techm_logo.svg'
          alt="Tech Mahindra Logo"
        />
      </Link>
      <ul className='flex items-center gap-4 uppercase text-white'>
        <li className='font-bold cursor-pointer border-b border-b-black hover:border-b-white transition-all'>
          <Link to="/keepup">Keep Up</Link>
        </li>
        <li className='font-bold cursor-pointer border-b border-b-black hover:border-b-white transition-all'>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </header>
  );
};