import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

/**
 * Reusable card component with neon border hover effect
 */
export function Card({ children, className, hover = true }: CardProps) {
    return (
        <div
            className={cn(
                "transition-all duration-300",
                hover && "hover:border-neon-red hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,0,0,0.1)]",
                className
            )}
        >
            {children}
        </div>
    );
}
