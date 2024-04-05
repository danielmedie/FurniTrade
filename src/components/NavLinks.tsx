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
        ["Search", "/search", <FaSearch />],
      ].map(([label, href, icon], index) => (
        <Link
          key={index} // Använd index som nyckel
          href={href as string} // Specificera att href är av typen string
          className='hover:delay-[0ms] relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900'
        >
          <span className='relative z-10'>{label}</span>
        </Link>
      ))}
    </>
  )
}
