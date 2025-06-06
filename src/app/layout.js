import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from 'next-auth/react'
import Providers from "./provider";
import { ContextProvider } from "@/context/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// app/layout.js or app/layout.jsx (Next.js App Router)

export const metadata = {
  title: 'OnTime Agency | Web, Ecommerce, Graphics & Animation in Pakistan',
  description:
    'OnTime Agency offers professional web and ecommerce development, graphic designing, 3D modeling, and animation services across Pakistan. Build your brand with premium design and tech.',
  keywords: [
    'OnTime Agency',
    'web development Pakistan',
    'ecommerce development',
    'graphic designing',
    '3D modeling',
    'animation services',
    'creative agency Pakistan',
    'Next.js developers Pakistan',
  ],
  authors: [{ name: 'OnTime Agency', url: 'https://ontime.pk' }],
  creator: 'OnTime Agency',
  publisher: 'OnTime Agency',
  metadataBase: new URL('https://ontime.pk'),
  openGraph: {
    title: 'OnTime Agency | Web, Ecommerce, Graphics & Animation in Pakistan',
    description:
      'OnTime Agency offers professional web and ecommerce development, graphic designing, 3D modeling, and animation services across Pakistan.',
    url: 'https://ontime.pk',
    siteName: 'OnTime Agency',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://ontime.pk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OnTime Agency - Creative Digital Services in Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnTime Agency | Web, Ecommerce, Graphics & Animation in Pakistan',
    description:
      'Explore premium design and development with OnTime Agency — Web, Ecommerce, Graphic Design, 3D Modeling & Animation in Pakistan.',
    site: '@ontimeagency',
    creator: '@ontimeagency',
    images: ['https://ontime.pk/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://ontime.pk',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <ContextProvider>
            {children}
          </ContextProvider>
        </Providers>
      </body>
    </html>
  );
}
