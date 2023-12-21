import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import styles from "./layout.module.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Devin's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={styles.removepm} lang="en">
      <body className={styles.removepm}>
        <div><Toaster/></div>
        <header>
          <Navbar />
        </header>
        <main className={styles.fillheight}>{children}</main>
        <footer className={styles.footer}>
          © 2023 devinhadley.github.io | All Rights Reserved
        </footer>
      </body>
    </html>
  );
}
