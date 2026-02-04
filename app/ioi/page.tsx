import type { Metadata } from "next";
import { ProfileDisplay } from "@/components/identity/ProfileDisplay";

export const metadata: Metadata = {
    title: "IOI | SXRDFISH",
    description: "Identity verification and contact information",
};

export default function IOIPage() {
    return (
        <div className="pt-24 md:pt-32 min-h-screen">
            <ProfileDisplay />
        </div>
    );
}
