'use client'

import Image from 'next/image'
import { LuShoppingCart } from 'react-icons/lu'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import UserDrawer from './UserDrawer'
import NavbarMenu from './NavbarMenu'
import { useCartStore } from '@/store/cart'

const Header = (): React.ReactElement => {
  const { totalCartQuantity } = useCartStore()
  const navbar = useRef<HTMLElement>(null)

  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Products',
      path: '/products',
    },
    {
      name: 'Brand',
      path: '/brand',
    },
    {
      name: 'FAQ',
      path: '/faq',
    },
  ]

  useEffect(() => {
    if (navbar.current !== null) {
      const height = navbar.current.offsetHeight
      document.documentElement.style.setProperty(
        '--navbar-height',
        `${height}px`,
      )
    }
  }, [])

  return (
    <header className="fixed z-10 backdrop-blur-md">
      <nav
        ref={navbar}
        className="flex w-screen items-center justify-between p-4"
      >
        <ul className="hidden gap-4 md:flex">
          {links.map(link => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="text-lg font-semibold underline decoration-transparent decoration-2 underline-offset-4 transition-all hover:decoration-accent hover:drop-shadow-lg"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/">
          <Image src="/logo.svg" alt="Klip Store Logo" width={75} height={50} />
        </Link>
        <div className="flex items-center justify-center gap-4 md:hidden">
          <UserDrawer />
          <NavbarMenu links={links} />
        </div>
        <div className="hidden items-center justify-center gap-4 md:flex">
          <Link href="/cart" className="relative w-fit">
            <LuShoppingCart size="1.5em" />
            {totalCartQuantity > 0 && (
              <div className="absolute -right-1/4 -top-1/4 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white">
                {totalCartQuantity}
              </div>
            )}
          </Link>
          <UserDrawer />
        </div>
      </nav>
    </header>
  )
}

export default Header
