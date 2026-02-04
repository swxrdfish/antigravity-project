'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
    { href: "/", label: "CORE" },
    { href: "/creation", label: "CREATION" },
    { href: "/ioi", label: "IOI" },
    { href: "/newsletter", label: "NEWSLETTER" },
];

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-6 md:py-8 backdrop-blur-md border-b border-neon-red/10 bg-black/50">
            <Link href="/" onClick={() => setIsOpen(false)}>
                <div className="font-brand text-xl md:text-2xl text-neon-red text-shadow-neon-lg animate-neon-pulse z-50 relative">
                    GRID
                </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex gap-8 list-none">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "transition-all duration-300 uppercase font-heading tracking-wider text-sm",
                                        isActive
                                            ? "text-neon-red text-shadow-neon"
                                            : "text-text-dim hover:text-neon-red hover:text-shadow-neon"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden z-50 text-neon-red focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <div className="w-8 h-8 flex flex-col justify-center gap-1.5">
                    <span className={cn("block w-full h-0.5 bg-neon-red transition-all duration-300", isOpen && "rotate-45 translate-y-2")} />
                    <span className={cn("block w-full h-0.5 bg-neon-red transition-all duration-300", isOpen && "opacity-0")} />
                    <span className={cn("block w-full h-0.5 bg-neon-red transition-all duration-300", isOpen && "-rotate-45 -translate-y-2")} />
                </div>
            </button>

            {/* Mobile Nav Overlay */}
            <div className={cn(
                "fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden",
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20" />

                <nav className="relative z-50">
                    <ul className="flex flex-col gap-8 text-center">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-3xl font-heading uppercase tracking-widest transition-all duration-300 block",
                                            isActive
                                                ? "text-neon-red text-shadow-neon-lg"
                                                : "text-white hover:text-neon-red"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
