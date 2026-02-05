import type { Metadata } from "next";
import { ProfileDisplay } from "@/components/identity/ProfileDisplay";

export const metadata: Metadata = {
    title: "IOI | GRID",
    description: "Identity verification and core protocols",
};

export default function IOIPage() {
    return (
        <div className="pt-24 md:pt-32 min-h-screen">
            <ProfileDisplay />
        </div>
    );
}
