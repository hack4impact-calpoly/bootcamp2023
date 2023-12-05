import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Belal Elshenety's Personal Website",
    description: "A personal website for Belal Elshenety",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <footer className="footer">
                    © 2023 Belal Elshenety's Website | All Rights Reserved | Made with
                    love ♥
                </footer>
            </body>
        </html>
    );
}
