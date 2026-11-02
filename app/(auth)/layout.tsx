import React from "react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex-1 flex items-center justify-center bg-base-200 px-4 py-8">
            {children}
        </main>
    );
}
