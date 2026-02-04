import type { Metadata } from "next";
import { SubscriptionForm } from "@/components/newsletter/SubscriptionForm";

export const metadata: Metadata = {
    title: "Newsletter | SXRDFISH",
    description: "Subscribe for updates on AI, Tech, and Future Trends",
};

export default function NewsletterPage() {
    return (
        <div className="pt-24 md:pt-32 pb-16">
            <div className="max-w-2xl mx-auto px-6 md:px-8">
                <div className="border border-neutral-800 bg-black/80 p-6 md:p-12 relative">
                    {/* Gradient border effect */}
                    <div className="absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 bg-gradient-to-br from-neon-red via-transparent to-neon-red -z-10 opacity-50" />

                    <h1 className="font-heading text-3xl md:text-4xl mb-2 animate-flicker">SYSTEM PATCH</h1>
                    <p className="text-text-main mb-8 text-sm md:text-base">Subscribe for updates on AI, Tech, and Future Trends.</p>

                    <SubscriptionForm />
                </div>
            </div>
        </div>
    );
}
