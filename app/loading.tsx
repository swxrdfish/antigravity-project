import { GlitchText } from "@/components/ui/GlitchText";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20" />

            <div className="relative">
                <GlitchText className="text-4xl md:text-6xl text-neon-red animate-pulse">
                    LOADING...
                </GlitchText>
                <div className="mt-4 w-48 h-1 bg-neutral-900 overflow-hidden relative">
                    <div className="absolute inset-0 bg-neon-red shadow-neon-red animate-loading-bar" />
                </div>
                <p className="mt-2 text-text-dim font-tech text-xs tracking-widest text-center uppercase">
                    Initializing Grid Uplink
                </p>
            </div>
        </div>
    );
}
