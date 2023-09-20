import './globals.css'
import { Manrope} from 'next/font/google'

const manrope = Manrope({ weight: ["800"] ,subsets: ['latin'] })

export const metadata = {
  title: 'Advice generator',
  description: 'Free advices for all',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
