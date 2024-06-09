"use client";

import { useRef } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function NavLink({
    href,
    children
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href={href}
        >
            {children}
        </a>
    );
}

export default function Navbar() {
    const menuRef = useRef<HTMLElement>(null);
    const openBtnRef = useRef<HTMLButtonElement>(null);
    const closeBtnRef = useRef<HTMLButtonElement>(null);
    const openMenu = (e: React.MouseEvent) => {
        (menuRef.current as HTMLElement).style.display = "flex";
        (openBtnRef.current as HTMLButtonElement).style.display = "none";
        (closeBtnRef.current as HTMLButtonElement).style.display = "block";
    };
    const closeMenu = (e: React.MouseEvent) => {
        (menuRef.current as HTMLElement).style.display = "none";
        (openBtnRef.current as HTMLButtonElement).style.display = "block";
        (closeBtnRef.current as HTMLButtonElement).style.display = "none";
    };
    return (
        <div className="antialiased bg-gray-100 dark:bg-gray-900 sticky top-0 z-50">
            <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
                <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-between p-4">
                        <a
                            href="/"
                            className="flex items-center gap-4 text-lg font-bold tracking-widest text-gray-900 rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
                        >
                            <Image
                                className="h-8 w-8 mx-auto object-contain"
                                width={2048}
                                height={2048}
                                src="/favicon.ico"
                                alt="logo"
                            />
                            CSP Blogs
                        </a>
                        <div className="md:hidden flex gap-4 items-center">
                            <ThemeSwitch />
                            <button
                                className="rounded-lg focus:outline-none focus:shadow-outline"
                                ref={openBtnRef}
                                onClick={openMenu}
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                className="hidden rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                                ref={closeBtnRef}
                                onClick={closeMenu}
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <nav
                        className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:items-center md:flex-row"
                        ref={menuRef}
                    >
                        <NavLink href="/categories">Categories</NavLink>
                        <NavLink href="#">Portfolio</NavLink>
                        <NavLink href="/#about">About</NavLink>
                        <ThemeSwitch className="hidden md:block md:ml-4" />
                    </nav>
                </div>
            </div>
        </div>
    );
}
