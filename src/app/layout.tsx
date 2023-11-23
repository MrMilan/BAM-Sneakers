import { Boxing, Excon } from './fonts/customFonts'

import type { Metadata } from 'next'

import { ThemeProvider } from '@/style/ThemeProvider'


export const metadata: Metadata = {
    title: 'ByAllMeans',
    description: 'Demo web',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${Excon.className} ${Boxing.className}`}
        >
            <body
                suppressHydrationWarning
                style={{
                    backgroundColor: '#eeeff0',
                }}
            >
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
