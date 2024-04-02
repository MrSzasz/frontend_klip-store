import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { LuInfo, LuUser } from 'react-icons/lu'
import PaymentForm from './PaymentForm'
import CartTable from './CartTable'
import { useSession } from 'next-auth/react'

const CartItemsContent = (): React.ReactElement => {
  const { data: session } = useSession()
  return (
    <section className="grid w-full grid-cols-1 pt-4 md:grid-cols-[1fr_30%]">
      <CartTable />
      <div className="sticky top-[calc(var(--navbar-height)+2rem)] mt-8 flex h-fit w-full flex-col justify-center gap-4 rounded-lg bg-primary p-8 text-white">
        <div className="relative flex items-center gap-1 border-b border-white pb-4">
          <h2 className="text-3xl font-bold">Payment info</h2>
          <HoverCard>
            <HoverCardTrigger className="cursor-pointer">
              <LuInfo />
            </HoverCardTrigger>
            <HoverCardContent className="bg-white text-black">
              <p>
                You wont be charged anything, it is a form to test the email
                service and the data collection from the form.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>

        <PaymentForm />
        {session === undefined ||
          (session === null ? (
            <div className="absolute bottom-0 left-0 right-0 m-auto flex h-full w-full flex-col items-center justify-center rounded-lg bg-black/75 p-8 backdrop-blur-sm">
              <p className="text-center ">
                You need to be logged in to complete your purchase.
              </p>
              <p className="flex gap-1 text-center">
                Click on the <LuUser size="1.5em" title="user icon" /> to log
                in.
              </p>
            </div>
          ) : null)}
      </div>
    </section>
  )
}

export default CartItemsContent
