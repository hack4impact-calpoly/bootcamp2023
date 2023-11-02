import React from 'react';
import Navbar from '@/app/components/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import About from '@/app/about/page';
import BlogPreview from '@/app/components/recipePreview';
import { recipeArray } from './recipeData'; // Updated import
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
        {recipeArray.map(blog => (
          <BlogPreview
            key={blog.foodname} // Provide a unique key for each component
            foodname={blog.foodname}
            description={blog.description}
            image={blog.image}
            ingredients={blog.ingredients}
            instructions={blog.instructions}
          />
        ))}
      </body>
    </html>
  );
}
