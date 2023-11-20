'use client'

import { ThemeProvider as MuiThemeProvider } from '@mui/material'

import { theme } from '@/style/theme'


const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <MuiThemeProvider
            theme={theme}
        >
            {children}
        </MuiThemeProvider >
    )
}

export { ThemeProvider }