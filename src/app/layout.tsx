import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.variable}>
        <Theme
          appearance="light"
          accentColor="indigo"
          grayColor="slate"
          radius="large"
          scaling="100%"
          panelBackground="solid"
        >
          {children}
        </Theme>
      </body>
    </html>
  )
}