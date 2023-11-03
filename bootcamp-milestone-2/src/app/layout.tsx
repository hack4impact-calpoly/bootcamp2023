import React from 'react';
import Navbar from '@/app/components/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import About from '@/app/about/page';
import styles from "@/app/page.module.css"

import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Ray's Personal Website",
  description: 'A personal website for Ray.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className={styles.foot}>© 2023 Ray's Website | All Rights Reserved</footer>
      </body>
    </html>
  );
}
