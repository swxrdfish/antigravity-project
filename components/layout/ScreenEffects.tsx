'use client';

export function ScreenEffects() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_120%)]" />

            {/* Scanlines */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                    backgroundSize: '100% 4px, 6px 100%'
                }}
            />

            {/* Bright Scan Line Beam */}
            <div className="absolute w-full h-[5px] bg-cyan-400/20 shadow-[0_0_10px_rgba(77,238,234,0.4)] animate-scan-fast" />
        </div>
    );
}
