'use client'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DoorClosed, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const page = () => {

    const [visibility, setvisibility] = useState(false)
  return (
    <div className='flex h-screen w-full px-14 flex-col'>
        {/* navigation bar */}
        <div className='flex justify-between items-center py-6 text  px-2  w-full'>
            <div>
                <h1 className='text-3xl font-bold'>
                    <span className='text-gray-900 '>NAI</span>
                    <span className='text-orange-600'>3.5</span>
                </h1>
            </div>
            <div className='py-2 px-2 rounded-full shadow-sm border-gray-200 border'><DoorClosed className=''/></div>
        </div>

        {/* main page */}
        <div className='px-2 '>
        <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Create an account
            </h1>

            <Link
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5',
              })}
              href='/login/sign-in'>
              Dont have an Account? Sign-up
              {/* <ArrowRight className='h-4 w-4' /> */}
            </Link>
          </div>

          <div className='grid gap-6'>
            <form >
              <div className='grid gap-2'>
                <div className='grid gap-1 py-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    // {...register('email')}
                    // className={cn({
                    //   'focus-visible:ring-red-500':
                    //     errors.email
                    // })}
                    placeholder='you@example.com'
                  />
                  {/* {errors?.email && (
                    <p className='text-sm text-red-500'>
                      {errors.email.message}
                    </p>
                  )} */}
                </div>

                <div className='grid gap-1 py-2'>
                  <Label htmlFor='password'>Password</Label>
                  <div className='flex'>
                  <Input
                    // {...register('password')}
                    // type={visibility? 'text' : 'password'}
                    // className={cn({
                    //   'focus-visible:ring-red-500':
                    //     errors.password,
                    // })}
                    placeholder='Password'
                  />
                  <button onClick={ () => {
                    setvisibility(prevValue => {
                      return !prevValue
                    })
                  }} className='flex justify-center items-center px-2'>
                    {!visibility? <EyeOff /> : <Eye />}
                  </button>
                  </div>
                  {/* {errors?.password && (
                    <p className='text-sm text-red-500'>
                      {errors.password.message}
                    </p>
                  )} */}
                </div> 

                <Button className=''>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div> 
        </div>

    </div>
  )
}

export default page