"use client"
import Navbar from '@/components/Navbar'
import {ThemeProvider} from "next-themes"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <ThemeProvider enableSystem={true} attribute='class'>
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    )
  }
  