import { SessionProvider } from "next-auth/react"
import { AppThemeProvider } from "@/components"


export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppThemeProvider>
            <SessionProvider>
                {children}
            </SessionProvider>
        </AppThemeProvider>

    )
}

