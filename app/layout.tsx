import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WhatsApp Sales AI Agent - Automate Your Sales on WhatsApp',
  description: 'Transform your WhatsApp into a powerful sales machine with AI-powered conversations that convert leads 24/7',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
