'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
    { href: "/", label: "CORE" },
    { href: "/creation", label: "CREATION" },
    { href: "/ioi", label: "IOI" },
    { href: "/newsletter", label: "SUB" },
];

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 flex items-center justify-between px-5 md:px-16 py-4 md:py-6 backdrop-blur-2xl border-b border-neon-red/10 bg-black/90">
            <Link href="/" onClick={() => setIsOpen(false)}>
                <div className="font-brand text-base md:text-2xl text-neon-red text-shadow-neon-lg animate-neon-pulse z-50 relative tracking-[0.2em]">
                    GRID
                </div>
            </Link>

            {/* Universal Menu Toggle (Desktop + Mobile) */}
            <button
                className="z-50 text-neon-red focus:outline-none w-10 h-10 flex items-center justify-center rounded-sm border border-neon-red/10 bg-white/5 active:bg-neon-red/20 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <div className="w-5 h-4 flex flex-col justify-between items-center transition-all duration-300">
                    <span className={cn("block w-full h-0.5 bg-neon-red transition-all duration-300", isOpen ? "rotate-45 translate-y-[7px]" : "")} />
                    <span className={cn("block w-full h-0.5 bg-neon-red transition-all duration-300", isOpen ? "opacity-0 scale-0" : "")} />
                    <span className={cn("block w-full h-0.5 bg-neon-red transition-all duration-300", isOpen ? "-rotate-45 -translate-y-[7px]" : "")} />
                </div>
            </button>

            {/* Navigation Overlay */}
            <div className={cn(
                "fixed inset-0 bg-black/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500",
                "h-[100dvh] w-full overflow-hidden",
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                {/* Background Grid Accent */}
                <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />

                {/* Visual Accent Lines */}
                <div className="absolute top-20 left-6 bottom-20 w-px bg-gradient-to-b from-transparent via-neon-red/20 to-transparent" />
                <div className="absolute top-20 right-6 bottom-20 w-px bg-gradient-to-b from-transparent via-neon-red/20 to-transparent" />

                <nav className="relative z-50 w-full px-12">
                    <ul className="flex flex-col gap-6 sm:gap-10 text-center">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <li
                                    key={item.href}
                                    className={cn(
                                        "transition-all duration-500 transform",
                                        isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    )}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-2xl sm:text-4xl font-heading uppercase tracking-[0.2em] transition-all duration-300 block py-2",
                                            isActive
                                                ? "text-neon-red text-shadow-neon-lg scale-110"
                                                : "text-text-main hover:text-neon-red opacity-80 hover:opacity-100"
                                        )}
                                    >
                                        <span className="inline-block relative">
                                            {item.label}
                                            {isActive && (
                                                <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-neon-red shadow-neon-red animate-pulse" />
                                            )}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Footer hint in menu */}
                <div className={cn(
                    "absolute bottom-12 left-0 w-full text-center transition-all duration-700 delay-500",
                    isOpen ? "opacity-30 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                    <p className="font-tech text-[10px] tracking-[0.5em] text-neon-red uppercase">
                        System Online • Secure Connection
                    </p>
                </div>
            </div>
        </header>
    );
}
