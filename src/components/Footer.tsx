
import Link from "next/link"

export function Footer() {
  return (
    <footer className='border-t border-gray-200'>
        <div className='flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6'>
          <p className='mt-6 text-sm text-gray-500 md:mt-0'>
            &copy; FurniTrade AB {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className='mt-6 text-sm text-gray-500 md:mt-0'>
            Kontakta oss på <Link
              href='mailto:info@furnitrade.com'
              className=' whitespace-nowrap text-center text-gray-900 underline'
            >
              info@furnitrade.com
            </Link>
          </p>
        </div>
    </footer>
  )
}
