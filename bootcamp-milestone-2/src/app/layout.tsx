import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import styles from "./layout.module.css";

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
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          © 2023 devinhadley.github.io | All Rights Reserved
        </footer>
      </body>
    </html>
  );
}
