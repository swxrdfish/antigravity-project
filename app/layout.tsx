import type { Metadata } from "next";
import { Orbitron, Rajdhani, Bungee } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { ScreenEffects } from "@/components/layout/ScreenEffects";

// Configure fonts
const orbitron = Orbitron({
    subsets: ['latin'],
    variable: '--font-orbitron',
    weight: ['400', '700'],
    display: 'swap',
});

const rajdhani = Rajdhani({
    subsets: ['latin'],
    variable: '--font-rajdhani',
    weight: ['300', '500', '700'],
    display: 'swap',
});

const bungee = Bungee({
    subsets: ['latin'],
    variable: '--font-bungee',
    weight: ['400'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "SXRDFISH | GRID",
    description: "AI Expert • Thinker • Creator",
    keywords: ["AI", "automation", "web development", "portfolio", "brand building", "UX/UI"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} ${bungee.variable}`}>
            <body className="bg-bg-primary text-text-main font-body bg-cyber-grid bg-grid w-full max-w-full overflow-x-hidden">
                <ScreenEffects />
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
