import type { Metadata } from "next";
import { GlitchText } from "@/components/ui/GlitchText";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Creation | SXRDFISH",
    description: "Deployed systems and creative projects",
};

const projects = [
    {
        id: 1,
        title: "AI BRAND AUTOMATION",
        shortName: "Brand.AI",
        description: "Automated workflow system for scalable brand identity management.",
        tags: ["PYTHON", "AI AGENTS"],
    },
    {
        id: 2,
        title: "CONTENT GENERATOR",
        shortName: "Content.Flow",
        description: "End-to-end pipeline for social media asset creation.",
        tags: ["NODE.JS", "OPENAI"],
    },
    {
        id: 3,
        title: "SOCIAL MODERATOR",
        shortName: "Mod.Bot",
        description: "Real-time comment analysis and moderation bot.",
        tags: ["NLP", "AUTOMATION"],
    },
    {
        id: 4,
        title: "DYNAMIC UX",
        shortName: "UX.System",
        description: "Adaptive user interface system for web platforms.",
        tags: ["REACT", "DESIGN"],
    },
];

export default function CreationPage() {
    return (
        <div className="container max-w-6xl mx-auto px-8 pt-32 pb-16">
            <GlitchText className="text-5xl mb-12">DEPLOYED SYSTEMS</GlitchText>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        className="bg-[#0a0a0a] border border-neutral-800 h-[300px] cursor-pointer overflow-hidden"
                    >
                        {/* Project Image Placeholder */}
                        <div className="h-3/5 bg-neutral-900 flex items-center justify-center text-neutral-700 text-2xl">
                            {project.shortName}
                        </div>

                        {/* Project Info */}
                        <div className="p-6">
                            <h3 className="font-heading text-white mb-2">{project.title}</h3>
                            <p className="text-sm text-text-dim mb-3">{project.description}</p>

                            {/* Tags */}
                            <div className="flex gap-2 flex-wrap">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs border border-neutral-700 px-2 py-0.5 rounded text-neon-red"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
