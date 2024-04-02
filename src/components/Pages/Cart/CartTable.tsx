'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import { LuTrash2 } from 'react-icons/lu'
import { useCartStore } from '@/store/cart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const CartTable = (): React.ReactElement => {
  const { cart, remove, changeQuantity } = useCartStore()

  return (
    <div className="w-full rounded-lg bg-white p-4 md:p-8">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="flex max-w-20 flex-col md:flex-row md:items-center md:gap-4">
              Product
            </TableHead>
            <TableHead className="hidden md:table-cell">Quantity</TableHead>
            <TableHead className="md:hidden">Qty</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead className="w-[10%]" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((prod, i) => (
            <TableRow key={i}>
              <TableCell className="flex max-w-20 flex-col md:flex-row md:items-center md:gap-4">
                <div className="relative aspect-square h-16 w-16 md:h-24 md:w-24">
                  <Image
                    src={prod.image}
                    fill
                    alt="Product image"
                    className="object-contain"
                  />
                </div>
                <p>{prod.title}</p>
              </TableCell>
              <TableCell>
                <Select
                  defaultValue={prod.quantity.toString()}
                  onValueChange={e => {
                    changeQuantity(prod.id, parseInt(e))
                  }}
                >
                  <SelectTrigger className="w-24 border-none bg-white text-black">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>${(prod.price * prod.quantity).toFixed(2)}</TableCell>
              <TableCell className="hidden md:table-cell">
                <Button
                  variant="destructive"
                  className="rounded-full"
                  onClick={() => {
                    remove(prod.id)
                  }}
                >
                  Remove
                </Button>
              </TableCell>
              <TableCell className="md:hidden">
                <Button variant="destructive" className="rounded-full ">
                  <LuTrash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell colSpan={2} className="space-y-1 py-8 text-right">
              <p>
                Subtotal: $
                {cart.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)}
              </p>
              <p>
                Shipping:{' '}
                {cart.reduce((a, b) => a + b.price * b.quantity, 0) > 250 ? (
                  <>
                    <small className="text-gray-500 line-through">$25.00</small>{' '}
                    $0
                  </>
                ) : (
                  '$25.00'
                )}
              </p>
              <Separator />
              <p>
                Total: $
                {cart.reduce((a, b) => a + b.price * b.quantity, 0) > 250
                  ? cart
                      .reduce((a, b) => a + b.price * b.quantity, 0)
                      .toFixed(2)
                  : (
                      cart.reduce((a, b) => a + b.price * b.quantity, 0) + 25
                    ).toFixed(2)}
              </p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default CartTable
