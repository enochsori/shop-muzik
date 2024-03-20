import { Link } from 'react-router-dom';
import { LuLogIn } from 'react-icons/lu';
import { PiShoppingCartDuotone } from 'react-icons/pi';
import { GrUserAdmin } from 'react-icons/gr';

export default function Navbar() {
  return (
    <header className='w-full flex justify-between items-center p-4 mb-4 text-2xl border-b border-gray-300'>
      <Link to='/' className='flex hover:opacity-80 items-center'>
        <img
          src='/images/favicon.ico'
          alt='main logo'
          className='w-16 rounded-lg mr-2'
        />
        <h1 className='font-bold text-brand text-3xl'>enoch's MUZIK SHOP</h1>
      </Link>

      <nav className='flex items-center gap-6 font-semibold'>
        <Link to='/all-products'>All Products</Link>

        <Link to='/new-product'>
          <GrUserAdmin />
        </Link>

        <Link to='/cart'>
          <PiShoppingCartDuotone />
        </Link>

        <button>
          <LuLogIn />
        </button>
      </nav>
    </header>
  );
}
