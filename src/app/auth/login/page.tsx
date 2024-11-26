'use client'

import { authenticate } from '@/actions'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { IoInformationOutline } from 'react-icons/io5'
 
export default function LoginPage() {
    const [state, dispatch] = useFormState(authenticate, undefined)
    const router = useRouter();

    useEffect(() => {
        if (state === 'Success') {
            router.replace('/dashboard');
        }
    }, [state])

    return (
    <div className="flex flex-col items-center justify-center h-screen">

        <div className="w-full max-w-sm space-y-4 bg-gray-200 p-6 rounded-lg ">
            <div className="space-y-2">
                <button className="w-full justify-between align-middle justify-items-center bg-zinc-900 border-zinc-800 hover:bg-zinc-900/90 hover:border-zinc-700">
                Sign in with GitHub
                <GitHubLogo className="h-5 w-5" />
                </button>
            </div>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-zinc-950 px-2 text-muted-foreground">or</span>
                </div>
            </div>

            <div className="space-y-2">
                <div className="space-y-1">
                    <form action={dispatch}>
                        <div className="py-3">
                            <label htmlFor="username" className="text-sm text-black ">
                                Email
                            </label>
                            <Input type="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="py-3">
                            <label htmlFor="password" className="text-sm text-black">
                                Password
                            </label>
                            <Input type="password" name="password" placeholder="Enter your password" />
                        </div>


                        <div className="py-6">
                            <LoginButton />
                        </div>
                        {state === 'CredentialsSignin' && ( 
                            <>
                                <div className='flex items-center gap-2 w-full justify-center'>
                                    <IoInformationOutline className='h-5 w-5 text-red-500' />
                                    <p className='text-red-500' >Invalid credentials.</p>
                                </div>
                            </> 
                        )}
                    </form>
                </div>
            </div>

        </div>
    </div>
    )
  }

  

function Separator() {
    return (
    <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
    )
  }

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input {...props} className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white border-zinc-800 text-black" />
    )
}

function GitHubLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    )
  }
  


   
  function LoginButton() {
    const { pending } = useFormStatus()
   
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (pending) {
        event.preventDefault()
      }
    }

    return (
    <button aria-disabled={pending}
        type="submit"
        onClick={handleClick}
        className={ clsx({
            'btn-primary': !pending,
            'btn-disabled': pending
            })
        }
        disabled={pending}
    >
    Login
    </button>
    )
  
}