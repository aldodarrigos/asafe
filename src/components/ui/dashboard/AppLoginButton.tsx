"use client";
import { useFormStatus } from "react-dom";
import clsx from "clsx";

export const AppLoginButton = () => {
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
            'btn-primary bg-gray-50 hover:!bg-gray-200 !text-gray-900 dark:!text-white dark:bg-gray-900 dark:hover:!bg-gray-800 dark:hover:text-white': !pending,
            'btn-disabled !bg-gray-400 hover:!bg-gray-400 !text-gray-900 dark:!text-white dark:bg-gray-900 dark:hover:!bg-gray-800 dark:hover:text-white': pending
            })
        }
        disabled={pending}
    >
    Login
    </button>
    )
  
}