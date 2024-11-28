import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Auth | Login',
    description: 'Login page'
}

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}