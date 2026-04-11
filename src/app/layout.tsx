import type { Metadata } from 'next'
import { Nunito, Fredoka } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

const fredoka = Fredoka({ 
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: 'Healthy Eating - Fun Learning Game',
  description: 'Learn about healthy food and nutrition through fun interactive games and quizzes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${fredoka.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
