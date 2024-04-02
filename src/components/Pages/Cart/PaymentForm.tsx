'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import InputMask from 'react-input-mask'
import emailjs from '@emailjs/browser'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useCartStore } from '@/store/cart'
import { useSession } from 'next-auth/react'
import { useRef } from 'react'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  name: z.string().min(3),
  cardNumber: z.string().min(16),
  cardExpiry: z.string().min(4),
  cardCVC: z.string().min(3).max(3),
})

const PaymentForm = (): React.ReactElement => {
  const { toast } = useToast()
  const emailjsForm = useRef<HTMLFormElement>(null)
  const { data: session } = useSession()
  const { removeAll } = useCartStore()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      cardNumber: '',
      cardExpiry: '',
      cardCVC: '',
    },
  })

  const sendEmail = async (): Promise<void> => {
    toast({
      title: 'Sending email...',
      description: 'Please wait.',
      duration: 3500,
    })
    try {
      if (emailjsForm.current === null) {
        throw new Error('Form not found')
      }

      await emailjs.sendForm(
        String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
        String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
        emailjsForm.current,
        {
          publicKey: String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
        },
      )

      removeAll()

      emailjsForm.current.reset()

      toast({
        title: 'Purchase success',
        description: 'Check your email for details (including spam folder).',
        duration: 3500,
      })
    } catch (error) {
      console.log('FAILED...', error)

      toast({
        variant: 'destructive',
        title: 'Purchase failed',
        description: 'Something went wrong. Please try again.',
        duration: 3500,
      })
    }
  }

  const onSubmit = async (
    values: z.infer<typeof formSchema>,
  ): Promise<void> => {
    await sendEmail()
  }

  return (
    <Form {...form}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative space-y-8"
        ref={emailjsForm}
      >
        <input
          type="hidden"
          id="email"
          name="email"
          // @ts-expect-error session is already checked
          value={session?.user?.email}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name on card</FormLabel>
              <FormControl>
                <Input
                  className="rounded-none border-b border-white bg-transparent p-0 text-xl uppercase placeholder:text-white/75"
                  placeholder="John Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cardNumber"
          render={() => (
            <div className="flex w-full flex-col">
              <FormLabel>Card Number</FormLabel>
              <InputMask
                className="flex h-9 w-full rounded-none border-b border-white bg-transparent p-0 py-1 text-xl transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/75  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                mask="9999   9999   9999   9999"
                alwaysShowMask
                maskPlaceholder="x"
                {...form.register('cardNumber')}
              />
            </div>
          )}
        />
        <div className="flex w-full items-center justify-between">
          <div>
            <FormField
              control={form.control}
              name="cardExpiry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiration date</FormLabel>
                  <FormControl>
                    <Input
                      className="text-md mt-0 rounded-none border-b border-white bg-transparent p-0 placeholder:text-white/75"
                      type="month"
                      min={new Date().toISOString().slice(0, 7)}
                      placeholder="MM/YY"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="cardCVC"
            render={({ field }) => (
              <FormItem className="w-1/5">
                <FormLabel>CVV</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9\s]{3,4}"
                    autoComplete="cc-csc"
                    placeholder="123"
                    maxLength={3}
                    className="rounded-none border-b border-white bg-transparent p-0 text-lg placeholder:text-white/75"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          variant="secondary"
          className="w-full rounded-full"
        >
          Confirm Payment
        </Button>
      </form>
    </Form>
  )
}

export default PaymentForm
