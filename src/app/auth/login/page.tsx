'use client'

import { authenticate } from '@/actions'
import { AppInput, AppLoginButton, AppLoginGithubButton } from '@/components'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { IoInformationOutline } from 'react-icons/io5'
import { signIn } from "next-auth/react";

export default function LoginPage() {
    const [state, dispatch] = useFormState(authenticate, undefined)
    const router = useRouter();
    const [credentialState, setCredentialState] = useState({
        email: 'test@test.com',
        password: 'testing'
    })

    useEffect(() => {
        if (state === 'Success') {
            router.replace('/dashboard');
        }
    }, [state])

    const handleGithubLogin = async () => {
        try {
            await signIn('github', { 
                redirect: true,
                callbackUrl: '/dashboard' 
            });
        } catch (error) {
            console.error('Error during GitHub login:', error);
        }
    }


    return (
    <div className="flex flex-col items-center justify-center h-screen ">

        <div className="w-full max-w-sm space-y-4 bg-gray-800 p-6 rounded-lg dark:bg-gray-50">
            <div className="space-y-2 mb-5">
                <AppLoginGithubButton onClick={handleGithubLogin} />
            </div>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-2 text-muted-foreground">OR</span>
                </div>
            </div>

            <div className="space-y-2">
                <div className="space-y-1">
                    <form action={dispatch}>
                        <div className="py-3 flex flex-col gap-3">
                            <label htmlFor="username" className="text-sm text-white dark:text-black ">
                                Email
                            </label>
                            <AppInput name="email" type="email" 
                            placeholder="Enter your email"  value={credentialState.email} onChange={(e) => setCredentialState({ ...credentialState, email: e.target.value })} />
                        </div>
                        <div className="py-3 flex flex-col gap-3">
                            <label htmlFor="password" className="text-sm text-white dark:text-black">
                                Password
                            </label>
                            <AppInput name="password" type="password" 
                            placeholder="Enter your password"  value={credentialState.password} onChange={(e) => setCredentialState({ ...credentialState, password: e.target.value })}/>
                        </div>


                        <div className="py-6 flex justify-center">
                            <AppLoginButton />
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
    <div data-orientation="horizontal" role="none" className="shrink-0 bg-gray-50 dark:bg-gray-900 h-[1px] w-full"></div>
    )
  }



  
   
  