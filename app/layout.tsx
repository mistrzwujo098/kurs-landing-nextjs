import type { Metadata, Viewport } from 'next'
import { Inter, Varela_Round, Montserrat } from 'next/font/google'
import './globals.css'
import TrackingScripts from '@/components/tracking/TrackingScripts'

// Optimized font loading with next/font/google
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const varelaRound = Varela_Round({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-varela',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Program Ósmoklasisty 2025 - Paulina od Matematyki',
  description: 'Zdaj Egzamin Ósmoklasisty z Matmy na ponad 80% bez stresu i drogich korepetycji',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#571A47',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${varelaRound.variable} ${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* MailerLite Universal */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
              .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
              n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
              (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
              ml('account', '581975');
            `,
          }}
        />
      </head>
      <body>
        <TrackingScripts />
        {children}
      </body>
    </html>
  )
}
