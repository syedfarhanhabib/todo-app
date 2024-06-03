import { Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
// export const neueMachina = localFont({
//     src: './Fonts/NeueMachina-Light.otf',
//     display: 'swap',
// })

export const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
})
