import React from "react";
import { Header } from "@/src/shared/presentation/components/Header";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <div className="flex-1">{children}</div>
        </>
    );
}
