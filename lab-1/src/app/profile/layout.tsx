import React from "react";
import Header from "@/app/components/Header";

export default function PagesLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Header />
        <body>{children}</body>
        </html>
    );
}