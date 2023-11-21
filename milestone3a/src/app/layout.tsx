import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aaron Ahmadyar Personal Website",
    description: "A personal website for Aaron Ahmadyar",
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
                    © 2023 My Personal Website | All Rights Reserved | Made with
                    love ♥
                </footer>
            </body>
        </html>
    );
}
