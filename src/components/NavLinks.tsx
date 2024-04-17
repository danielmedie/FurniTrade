import { FaHome, FaShoppingCart, FaSignInAlt, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

export function NavLinks() {
  return (
    <>
      {[
        ["FurniTrade", "/", <FaHome />],
        ["Products", "/products", <FaShoppingCart />],
        ["Sell", "/sell", <FaSignInAlt />],
        ["Login", "/login", <FaSignInAlt />],
        ["Cart", "/cart", <FaShoppingCart />],
      ].map(([label, href, icon], index) => (
        <Link
          key={index}
          href={href as string}
          className='hover:delay-[0ms] relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900'
        >
          <span className='relative z-10'>{label}</span>
        </Link>
      ))}

      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="hover:delay-[0ms] relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900"
          onChange={(e) => {
            console.log('Sökinmatning ändrad:', e.target.value);
          }}
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </>
  )
} 
