'use client';

import { useState, FormEvent } from "react";
import { NeonButton } from "@/components/ui/NeonButton";

interface DecryptModalProps {
    onClose: () => void;
    onSuccess: () => void;
}

export function DecryptModal({ onClose, onSuccess }: DecryptModalProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsLoading(false);
        onSuccess();
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 overflow-y-auto">
            <div className="bg-neutral-900 border border-neon-red p-6 md:p-8 w-full max-w-md text-center shadow-neon-red-intense my-auto">
                <h2 className="font-heading text-2xl mb-2">ACCESS REQUEST</h2>
                <p className="text-text-dim mb-6">Identity verification required.</p>

                <form onSubmit={handleSubmit} className="text-left space-y-6">
                    <div>
                        <label htmlFor="visitorName" className="block mb-2 text-neon-red uppercase text-sm">
                            CODENAME / NAME
                        </label>
                        <input
                            type="text"
                            id="visitorName"
                            name="visitorName"
                            required
                            className="w-full bg-black border border-neutral-700 text-white p-3 font-body focus:border-neon-red focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="visitorEmail" className="block mb-2 text-neon-red uppercase text-sm">
                            COMMS LINK / EMAIL
                        </label>
                        <input
                            type="email"
                            id="visitorEmail"
                            name="visitorEmail"
                            required
                            className="w-full bg-black border border-neutral-700 text-white p-3 font-body focus:border-neon-red focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="visitorPurpose" className="block mb-2 text-neon-red uppercase text-sm">
                            PURPOSE
                        </label>
                        <select
                            id="visitorPurpose"
                            name="visitorPurpose"
                            className="w-full bg-black border border-neutral-700 text-white p-3 font-body focus:border-neon-red focus:outline-none transition-colors"
                        >
                            <option>Business Inquiry</option>
                            <option>Collaboration</option>
                            <option>Recruitment</option>
                            <option>Just Curious</option>
                        </select>
                    </div>

                    <NeonButton type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? 'DECRYPTING...' : 'DECRYPT IDENTITY'}
                    </NeonButton>

                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full bg-transparent border-0 text-neutral-600 mt-4 cursor-pointer hover:text-neutral-400 transition-colors"
                    >
                        CANCEL
                    </button>
                </form>
            </div>
        </div>
    );
}
