import type { Metadata, Viewport } from 'next'
import './globals.css'
import TrackingScripts from '@/components/tracking/TrackingScripts'

export const metadata: Metadata = {
  title: 'Program Ósmoklasisty 2025 - Paulina od Matematyki',
  description: 'Zdaj Egzamin Ósmoklasisty z Matmy na ponad 80% bez stresu i drogich korepetycji',
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
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

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
