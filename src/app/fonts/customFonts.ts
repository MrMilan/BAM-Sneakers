import localFont from 'next/font/local'


const Boxing = localFont({
    src: [
        {
            path: './fonts/Boxing-Regular.otf',
            weight: '400',
            style: 'normal',
        },
    ],
})

const Excon = localFont({
    src: [
        {
            path: './fonts/Excon-Bold.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './fonts/Excon-Medium.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/Excon-Regular.otf',
            weight: '400',
            style: 'normal',
        },
    ],
})

export { Boxing, Excon }