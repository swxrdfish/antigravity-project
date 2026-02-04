'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/", label: "CORE" },
    { href: "/creation", label: "CREATION" },
    { href: "/ioi", label: "IOI" },
    { href: "/newsletter", label: "NEWSLETTER" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 w-full z-50 flex items-center justify-between px-16 py-8 backdrop-blur-md border-b border-neon-red/10">
            <Link href="/">
                <div className="font-brand text-2xl text-neon-red text-shadow-neon-lg animate-neon-pulse">
                    GRID
                </div>
            </Link>

            <nav>
                <ul className="flex gap-8 list-none">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "transition-all duration-300 uppercase",
                                        isActive
                                            ? "text-neon-red text-shadow-neon"
                                            : "hover:text-neon-red hover:text-shadow-neon"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
