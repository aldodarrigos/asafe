import { SessionProvider } from "next-auth/react"
import { AppThemeProvider } from "@/components"

interface AppProviderProps {
    children: React.ReactNode;
    className?: string;
}


export const AppProvider = ({ children, className }: AppProviderProps) => {
    return (
        <AppThemeProvider className={className}>
            <SessionProvider>
                {children}
            </SessionProvider>
        </AppThemeProvider>

    )
}

