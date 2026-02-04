'use client';

import { useState, FormEvent } from "react";
import { NeonButton } from "@/components/ui/NeonButton";
import { cn } from "@/lib/utils";

const topics = ['AI & AUTOMATION', 'TECHNOLOGY', 'WORLD AFFAIRS', 'BRAND & DESIGN'];

export function SubscriptionForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // TODO: Send to backend API
        console.log({ email, interests: selectedTopics });

        alert('UPLINK ESTABLISHED. WELCOME TO THE GRID.');
        e.currentTarget.reset();
        setSelectedTopics([]);
        setIsSubmitting(false);
    };

    const toggleTopic = (topic: string) => {
        setSelectedTopics((prev) =>
            prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
        );
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
                type="email"
                name="email"
                placeholder="ENTER COMMS ADDRESS..."
                required
                className="p-4 bg-black border border-neutral-600 text-white text-base font-body focus:border-neon-red focus:outline-none transition-colors"
            />

            <div>
                <label className="block mb-4 text-neon-red uppercase tracking-wider">
                    SELECT INTERESTS:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {topics.map((topic) => (
                        <label
                            key={topic}
                            className="flex items-center gap-3 cursor-pointer text-text-dim transition-colors hover:text-text-main py-1"
                        >
                            <input
                                type="checkbox"
                                name="interest"
                                value={topic}
                                checked={selectedTopics.includes(topic)}
                                onChange={() => toggleTopic(topic)}
                                className="w-5 h-5 accent-neon-red flex-shrink-0"
                            />
                            <span className={cn(
                                "text-xs sm:text-sm tracking-widest",
                                selectedTopics.includes(topic) ? 'text-neon-red' : ''
                            )}>
                                {topic}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <NeonButton type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'ESTABLISHING...' : 'INITIALIZE UPLINK'}
            </NeonButton>
        </form>
    );
}
