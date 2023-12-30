import React from 'react';
import Navbar from "./navbar"; // Ensure the path is correct
import Footer from './footer';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <main className="inter">
                {children}
            </main>
            <Footer />
            
        </>
    );
};

export default Layout;
