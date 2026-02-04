import { cn } from "@/lib/utils";

interface GlitchTextProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * Animated glitch text component with flicker effect
 */
export function GlitchText({ children, className }: GlitchTextProps) {
    return (
        <h1 className={cn(
            "font-heading uppercase tracking-wide animate-fade-in-up",
            className
        )}>
            {children}
        </h1>
    );
}
