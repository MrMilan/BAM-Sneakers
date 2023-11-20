import type { Metadata } from 'next'

import { ThemeProvider } from '@/style/ThemeProvider'


export const metadata: Metadata = {
    title: 'ByAllMeans',
    description: 'Demo web',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
