import '@radix-ui/themes/styles.css' // estilos de Radix
import { Theme } from '@radix-ui/themes'
import './globals.css'               // tu CSS (Tailwind, etc.)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* Ajusta estos props según lo que elijas en el playground */}
        <Theme
          appearance="light"            // o "dark" / "inherit"
          accentColor="iris"            // tu color de marca cercano
          grayColor="slate"             // escala de grises
          radius="large"                // xs/sm/md/lg/full
          scaling="100%"                // 90/95/100/105/110%
          panelBackground="solid"       // "solid" | "translucent"
        >
          {children}
        </Theme>
      </body>
    </html>
  )
}

import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.variable}>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}