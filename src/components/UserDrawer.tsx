'use client'

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { LuUser } from 'react-icons/lu'
import { Button } from './ui/button'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

const UserDrawer = (): React.ReactElement => {
  const { data: session } = useSession()

  return (
    <Sheet>
      <SheetTrigger className="md:mr-4">
        <LuUser size="1.5em" />
      </SheetTrigger>
      <SheetContent className="flex items-center justify-center">
        {session === undefined || session === null ? (
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <SheetTitle className="flex-1 text-center text-2xl font-bold">
              Log in
            </SheetTitle>
            <div className="relative h-36 w-36">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                fill
                alt="Profile image"
                className="rounded-full object-cover ring-4 ring-primary"
              />
            </div>
            <p className="w-3/4 text-center">
              To save your cart and favorites, you need to log in.
            </p>
            <Button
              variant="default"
              className="w-full rounded-full"
              onClick={() => {
                void signIn('github')
              }}
            >
              Log in
            </Button>
          </div>
        ) : (
          <div className="flex h-[calc(100%-1rem)] w-full flex-col items-center justify-center gap-8 py-16">
            <SheetTitle className="text-center text-2xl font-bold">
              User profile
            </SheetTitle>
            <div className="flex flex-1 flex-col items-center justify-between">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="relative h-36 w-36">
                  <Image
                    // @ts-expect-error NULL image is handled
                    src={
                      session !== undefined &&
                      session !== null &&
                      session.user?.image !== null
                        ? session.user?.image
                        : 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
                    }
                    fill
                    alt="Profile image"
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-center font-bold">{session.user?.name}</p>
              </div>
              <Button
                variant="destructive"
                className="w-fit rounded-full"
                onClick={() => {
                  void signOut()
                }}
              >
                Log out
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default UserDrawer
