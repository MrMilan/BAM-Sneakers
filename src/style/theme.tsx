import common from '@mui/material/colors/common'
import { createTheme } from '@mui/material/styles'

import { Boxing, Excon } from '@/app/fonts/customFonts'


const theme = createTheme({
    typography: {
        fontFamily: Excon.style.fontFamily,
        h1: {
            fontFamily: Boxing.style.fontFamily,
            fontSize: 64,
        },
        h2: {
            fontFamily: Boxing.style.fontFamily,
            fontSize: 36,
        },
    },
    palette: {
        primary: {
            main: '#191919',
            contrastText: common.white,
        },
        secondary: {
            main: '#EF233C',
            contrastText: common.white,
        },
        text: {
            primary: common.black,
            secondary: '#6e6e6e',
            disabled: common.black,
        },
        background: {
            default: '#eeeff0',
        },
        divider: '#e4e4e4',
    },
})

export { theme }
