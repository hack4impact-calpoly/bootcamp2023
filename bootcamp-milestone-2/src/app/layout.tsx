import type { Metadata } from 'next'
import React from 'react';
import './globals.css';
import Navbar from "./components/navbar";
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
