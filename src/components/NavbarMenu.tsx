'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useCartStore } from '@/store/cart'
import Link from 'next/link'
import { useState } from 'react'
import { LuMenu } from 'react-icons/lu'

interface NavbarMenuProps {
  links: Array<{
    name: string
    path: string
  }>
}

const NavbarMenu = ({ links }: NavbarMenuProps): React.ReactElement => {
  const { totalCartQuantity } = useCartStore()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <LuMenu size="2em" />
      </SheetTrigger>
      <SheetContent className="flex w-full items-center justify-center bg-primary text-white">
        <ul className="flex flex-col gap-8 p-4 text-center">
          {links.map(link => (
            <li
              key={link.name}
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <Link
                href={link.path}
                className="text-3xl font-semibold underline decoration-transparent decoration-2 underline-offset-4 transition-all hover:decoration-accent hover:drop-shadow-lg"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li
            onClick={() => {
              setIsOpen(false)
            }}
          >
            <Link
              href="/cart"
              className="relative text-3xl font-semibold underline decoration-transparent decoration-2 underline-offset-4 transition-all hover:decoration-accent hover:drop-shadow-lg"
            >
              Cart
              {totalCartQuantity > 0 && (
                <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {totalCartQuantity}
                </div>
              )}
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default NavbarMenu
