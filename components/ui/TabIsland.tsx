import { cn } from "@/lib/utils";

interface TabIslandProps {
    children: React.ReactNode;
    title: string;
    className?: string;
    tag?: string;
}

export function TabIsland({ children, title, className, tag }: TabIslandProps) {
    return (
        <div className={cn("group relative flex flex-col", className)}>
            {/* Tab Header */}
            <div className="flex items-end">
                <div className="bg-neutral-900 border-t border-x border-neutral-800 px-4 py-1 rounded-t-lg relative">
                    <span className="font-heading text-[10px] tracking-[0.2em] text-neon-red uppercase">
                        {tag || "SERVICE"}
                    </span>
                    {/* Active indicator dot */}
                    <div className="absolute top-1 right-1.5 w-1 h-1 rounded-full bg-neon-red animate-pulse" />
                </div>
                <div className="flex-grow border-b border-neutral-800" />
            </div>

            {/* Main Island Body */}
            <div className="bg-black/90 border-x border-b border-neutral-800 p-6 md:p-8 backdrop-blur-md rounded-b-xl rounded-tr-xl transition-all duration-500 group-hover:border-neon-red/40 group-hover:shadow-[0_0_20px_rgba(255,26,26,0.1)] relative overflow-hidden h-full">
                {/* Visual scanline effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-red/20 animate-scan-fast pointer-events-none hidden group-hover:block" />

                <h3 className="text-white font-heading text-lg mb-4 tracking-wider group-hover:text-neon-red transition-colors">
                    {title}
                </h3>
                <div className="text-text-dim text-sm leading-relaxed">
                    {children}
                </div>

                {/* Corner detail */}
                <div className="absolute bottom-2 right-2 flex gap-1">
                    <div className="w-1 h-1 bg-neutral-800" />
                    <div className="w-3 h-1 bg-neutral-800" />
                </div>
            </div>
        </div>
    );
}
