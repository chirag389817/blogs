import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CSP Blogs",
    description:
        "This is a blog site of Chirag S Patel where you can find coding, web development, data science, AI/ML related blogs."
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} `}>
                <Navbar />
                <div className="max-w-screen-xl mx-auto">
                    <div className="px-4 lg:px-0 text-gray-700 dark:text-gray-200 max-w-screen-md mx-auto text-lg leading-relaxed">
                        {children}
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}
