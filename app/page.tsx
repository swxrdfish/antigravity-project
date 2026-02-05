import { GlitchText } from "@/components/ui/GlitchText";
import { TabIsland } from "@/components/ui/TabIsland";

export default function HomePage() {
    const services = [
        {
            title: "AI AUTOMATION",
            tag: "AGENTIC",
            description: "Streamlining complex workflows with intelligent agents and automated systems.",
        },
        {
            title: "BRAND BUILDING",
            tag: "IDENTITY",
            description: "Forging distinctive digital identities that resonate in the hyper-connected noise.",
        },
        {
            title: "UX/UI DESIGN",
            tag: "INTERFACE",
            description: "Crafting interfaces that feel like the future—obsessively minimal and high-performance.",
        },
        {
            title: "WEB DEV",
            tag: "STACK",
            description: "Full-stack dynamic platforms built for scale, speed, and seamless interaction.",
        },
        {
            title: "MOTION SYSTEMS",
            tag: "DYNAMIC",
            description: "Bringing digital environments to life with high-fidelity motion and glitch-inspired visual effects.",
        },
        {
            title: "IDENTITY ARCHITECTURE",
            tag: "SECURE",
            description: "Architecting secure, encrypted personal presences with refined digital-first security protocols.",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="h-[100dvh] flex flex-col justify-center items-center text-center relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 -z-10 opacity-60 bg-gradient-radial from-red-950/20 via-black to-black" />

                <GlitchText className="text-[clamp(2.25rem,12vw,4.5rem)] mb-4 md:mb-0 leading-[1.1] md:leading-none px-6">
                    WELCOME TO<br />GRID
                </GlitchText>
                <p className="text-[clamp(0.6rem,3vw,1.25rem)] tracking-[0.3em] md:tracking-[0.5em] text-neon-red mt-6 px-8 font-bold opacity-90 max-w-lg">
                    AI Expert • Thinker • Creator{" "}
                </p>
            </div>

            {/* Services Section */}
            <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32">
                <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
                    <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-[0.3em] text-center md:text-left">
                        CORE SERVICES
                    </h2>
                    <div className="text-[10px] tracking-[0.4em] text-text-dim uppercase text-center md:text-right">
                        System capacity: Optimal • Services: 06
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((service) => (
                        <TabIsland
                            key={service.title}
                            title={service.title}
                            tag={service.tag}
                        >
                            <p>{service.description}</p>
                        </TabIsland>
                    ))}
                </div>
            </div>
        </>
    );
}
