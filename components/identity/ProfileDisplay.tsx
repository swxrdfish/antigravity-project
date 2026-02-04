'use client';

import { useState, useEffect, FormEvent } from "react";
import { DecryptModal } from "./DecryptModal";
import { NeonButton } from "@/components/ui/NeonButton";

const profileData = {
    encrypted: {
        name: "ARY FLYNN",
        alias: "CODENAME: UNKNOWN",
    },
    decrypted: {
        name: "Ariful Karim Sahaf",
        alias: "SXRDFISH",
        email: "arifulsahaf@gmail.com",
        phone: "+8801640542998",
        education: "Undergraduate @ East West University",
    },
};

export function ProfileDisplay() {
    const [isDecrypted, setIsDecrypted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Check sessionStorage on mount
    useEffect(() => {
        const decrypted = sessionStorage.getItem('isDecrypted');
        if (decrypted === 'true') {
            setIsDecrypted(true);
        }
    }, []);

    const handleDecryptSuccess = () => {
        setIsDecrypted(true);
        setIsModalOpen(false);
        sessionStorage.setItem('isDecrypted', 'true');
    };

    return (
        <div className="container max-w-6xl mx-auto px-6 md:px-8 pb-20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 min-h-[70vh] py-16 md:py-0">
                {/* Avatar Frame */}
                <div className="w-[clamp(180px,50vw,300px)] h-[clamp(180px,50vw,300px)] border-2 border-neon-red rounded-full overflow-hidden relative shadow-neon-red flex-shrink-0">
                    <div
                        className={`w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-700 font-heading text-lg md:text-xl transition-all duration-1000 ${isDecrypted ? 'filter-none' : 'blur-sm opacity-50 select-none'
                            }`}
                    >
                        {isDecrypted ? 'VERIFIED' : 'ENCRYPTED'}
                    </div>
                </div>

                {/* Profile Data */}
                <div className="profile-data text-center md:text-left">
                    <h1 className="font-heading text-[clamp(1.75rem,8vw,3.5rem)] mb-3 leading-tight">
                        {isDecrypted ? profileData.decrypted.name : profileData.encrypted.name}
                    </h1>
                    <h2
                        className={`font-heading text-[clamp(1rem,4vw,1.5rem)] mb-10 tracking-[0.2em] ${isDecrypted ? 'text-text-main' : 'text-neon-red'
                            }`}
                    >
                        {isDecrypted ? `ALIAS: ${profileData.decrypted.alias}` : profileData.encrypted.alias}
                    </h2>

                    {!isDecrypted ? (
                        <div className="blur-sm opacity-50 select-none mb-8">
                            <p className="mb-2">CONTACT: [REDACTED]</p>
                            <p className="mb-2">EDUCATION: [REDACTED]</p>
                            <p className="mb-2">LOCATION: [REDACTED]</p>
                        </div>
                    ) : (
                        <div className="mb-8 space-y-2">
                            <p>
                                <strong className="text-neon-red">EMAIL:</strong> {profileData.decrypted.email}
                            </p>
                            <p>
                                <strong className="text-neon-red">PHONE:</strong> {profileData.decrypted.phone}
                            </p>
                            <p>
                                <strong className="text-neon-red">EDUCATION:</strong> {profileData.decrypted.education}
                            </p>
                            <br />
                            <div className="flex gap-4">
                                <a href="#" className="inline-block">
                                    <NeonButton>LINKEDIN</NeonButton>
                                </a>
                                <a href="#" className="inline-block">
                                    <NeonButton>GITHUB</NeonButton>
                                </a>
                            </div>
                        </div>
                    )}

                    {!isDecrypted && (
                        <NeonButton onClick={() => setIsModalOpen(true)}>
                            INITIATE DECRYPTION
                        </NeonButton>
                    )}
                </div>
            </div>

            {/* Decrypt Modal */}
            {isModalOpen && (
                <DecryptModal
                    onClose={() => setIsModalOpen(false)}
                    onSuccess={handleDecryptSuccess}
                />
            )}
        </div>
    );
}
