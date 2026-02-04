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
            <div className="h-[90vh] flex flex-col justify-center items-center text-center relative">
                {/* Background gradient */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-50 bg-gradient-radial from-red-950/0 via-black/50 to-black" />

                <GlitchText className="text-4xl md:text-7xl mb-2 md:mb-0 leading-tight md:leading-none px-4">
                    WELCOME TO<br />MY GRID
                </GlitchText>
                <p className="text-sm md:text-xl tracking-[3px] md:tracking-[5px] text-neon-red mt-4 px-4 font-bold">
                    AI ARCHITECT • CREATIVE TECHNOLOGIST • BRAND BUILDER
                </p>
            </div>

            {/* Services Section */}
            <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-16">
                <h2 className="font-heading text-3xl uppercase tracking-wider mb-16">CORE SERVICES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <Card key={service.title} className="bg-black/80 border border-neutral-700 p-8">
                            <h3 className="text-neon-red font-heading text-lg mb-3">{service.title}</h3>
                            <p className="text-text-dim text-sm">{service.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}
