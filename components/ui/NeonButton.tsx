import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

/**
 * Neon-styled button with hover effects
 */
export function NeonButton({
    children,
    className,
    variant = 'primary',
    disabled,
    ...props
}: NeonButtonProps) {
    return (
        <button
            disabled={disabled}
            className={cn(
                "bg-transparent border border-neon-red text-neon-red px-8 py-3",
                "font-heading uppercase cursor-pointer transition-all duration-300",
                "hover:bg-neon-red hover:text-black hover:shadow-neon-red",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
