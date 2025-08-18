import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { Inter } from 'next/font/google'
import { VisualEditing } from 'next-sanity'
import { draftMode } from 'next/headers'
import './globals.css'
import { DisableDraftMode } from '@/components/DisableDraftMode'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()
  return (
    <html lang="es">
      <body className={inter.variable}>
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