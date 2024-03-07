import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        <Footer />
        </html>
    );
}