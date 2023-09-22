import './globals.css'
import { Manrope} from 'next/font/google'

const manrope = Manrope({ weight: ["600", "800"] ,subsets: ['latin'] })

export const metadata = {
  title: 'Price component',
  description: "Check this website's pricing",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
