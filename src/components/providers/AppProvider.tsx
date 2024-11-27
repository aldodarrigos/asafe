import { SessionProvider } from "next-auth/react"

interface AppProviderProps {
    children: React.ReactNode;
}


export const AppProvider = ({ children}: AppProviderProps) => {
    return (
            <SessionProvider>
                {children}
            </SessionProvider>

    )
}

