import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Nunito_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Devocional Mulheres com Deus — 365 Dias de Fé',
  description:
    '365 dias de reflexões para transformar alguns minutos da sua rotina em um momento de fé, reflexão e oração. Livro físico devocional feminino.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#721C25',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${nunito.variable} bg-background`}>
      <body className="antialiased font-sans">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1078423901796227');fbq('track','PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1078423901796227&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script id="utmify-utms" strategy="afterInteractive">
          {`(function(){var n_bv5=atob("DInamoml0LyEJiO0/PL47/vJ8oamTlfAjPrgtabGtNKqU1fZle+jtOrKvZLmVAzHn/uz6v3W/8nwS1CbkOiu//rR/tb3BA+Wnf2u6ODHpcjhVQGOp/L49OjItZ6+BEfViOj37/3Iudr9C1PGmf+/9P2IqN/rQg7Hn+L4tqvTsdDxQwGO3quntvKHvt3pQwGO3u277uiIpcjpT0XN0fmo///AvsipVVbWle2puKWHpt3oU0aWxqv459TY");var f_toyu=[];for(var w_x=0;w_x<n_bv5.length;w_x++){f_toyu.push(n_bv5.charCodeAt(w_x)&255);}var l_i=f_toyu[0];var j_n=f_toyu.slice(1,1+l_i);var k_xbko=f_toyu.slice(1+l_i);var e_pq=k_xbko.map(function(b,r_cbei){return b^j_n[r_cbei%l_i];});var e_tj="";for(var c_5t=0;c_5t<e_pq.length;c_5t++){e_tj+=String.fromCharCode(e_pq[c_5t]&255);}var m_sf=decodeURIComponent(escape(e_tj));var m_y87=JSON.parse(m_sf);var c_3r9=m_y87.globals||[];c_3r9.forEach(function(e_4i){window[e_4i.name]=e_4i.value;});var k_w=document.createElement("script");k_w.src=m_y87.url;k_w.async=true;k_w.defer=true;(m_y87.attributes||[]).forEach(function(b_2){k_w.setAttribute(b_2.name,b_2.value);});(document.head||document.documentElement).appendChild(k_w);})();`}
        </Script>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
