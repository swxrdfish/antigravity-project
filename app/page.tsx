import { GlitchText } from "@/components/ui/GlitchText";
import { Card } from "@/components/ui/Card";

export default function HomePage() {
    const services = [
        {
            title: "AI AUTOMATION",
            description: "Streamlining workflows with intelligent agents and systems.",
        },
        {
            title: "BRAND BUILDING",
            description: "Forging identities that resonate in the digital noise.",
        },
        {
            title: "UX/UI DESIGN",
            description: "Interfaces that feel like the future, today.",
        },
        {
            title: "WEB DEV",
            description: "Full-stack dynamic platforms built for scale.",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="h-[100dvh] flex flex-col justify-center items-center text-center relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 -z-10 opacity-60 bg-gradient-radial from-red-950/20 via-black to-black" />

                <GlitchText className="text-[clamp(2.25rem,12vw,4.5rem)] mb-4 md:mb-0 leading-[1.1] md:leading-none px-6">
                    WELCOME TO<br />MY GRID
                </GlitchText>
                <p className="text-[clamp(0.6rem,3vw,1.25rem)] tracking-[0.3em] md:tracking-[0.5em] text-neon-red mt-6 px-8 font-bold uppercase opacity-90 max-w-lg">
                    AI Architect • Creative Technologist • Brand Builder
                </p>
            </div>

            {/* Services Section */}
            <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32">
                <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-[0.3em] mb-12 md:mb-16 text-center md:text-left">
                    CORE SERVICES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {services.map((service) => (
                        <Card key={service.title} className="bg-black/90 border border-neutral-800 p-6 md:p-8 backdrop-blur-sm">
                            <h3 className="text-neon-red font-heading text-base md:text-lg mb-4 tracking-wider">{service.title}</h3>
                            <p className="text-text-dim text-sm leading-relaxed">{service.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}
