import type { Metadata } from "next";
import { SubscriptionForm } from "@/components/newsletter/SubscriptionForm";

export const metadata: Metadata = {
    title: "Newsletter | SXRDFISH",
    description: "Subscribe for updates on AI, Tech, and Future Trends",
};

export default function NewsletterPage() {
    return (
        <div className="pt-24 md:pt-[15vh] pb-24 min-h-screen">
            <div className="max-w-2xl mx-auto px-5 md:px-8">
                <div className="border border-neutral-800 bg-black/90 p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
                    {/* Gradient border effect */}
                    <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-br from-neon-red/30 via-transparent to-neon-red/30 -z-10" />

                    <h1 className="font-heading text-[clamp(1.5rem,6vw,2.5rem)] mb-3 animate-flicker tracking-widest text-white">SYSTEM PATCH</h1>
                    <p className="text-text-dim mb-10 text-xs sm:text-sm tracking-wide leading-relaxed">Subscribe for mission critical updates on AI, Tech, and Future Trends.</p>

                    <SubscriptionForm />
                </div>
            </div>
        </div>
    );
}
