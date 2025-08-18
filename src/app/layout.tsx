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
import { Theme } from '@radix-ui/themes'
import { VisualEditing } from 'next-sanity'
import { draftMode } from 'next/headers'
import { DisableDraftMode } from '@/components/DisableDraftMode'

// ...
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()
  return (
    <html lang="es">
      <body>
        <Theme accentColor="indigo" grayColor="slate" radius="large" scaling="100%" panelBackground="solid">
          {children}
          {isEnabled && (
            <>
              <VisualEditing />
              <DisableDraftMode />
            </>
          )}
        </Theme>
      </body>
    </html>
  )
}