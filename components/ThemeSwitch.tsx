"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const [isDarnkmode, setIsDarkmode] = useState(false);
    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        )
            toggleTheme(null);
    }, []);
    const toggleTheme = (e: React.MouseEvent<HTMLButtonElement> | null) => {
        if (!isDarnkmode) {
            document.body.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.body.classList.remove("dark");
            localStorage.theme = "light";
        }
        setIsDarkmode(!isDarnkmode);
    };
    return (
        <div>
            <button
                className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
                onClick={toggleTheme}
            >
                <div
                    className={`translate-x-[var(--theme-switch-translate-x)] bg-[var(--theme-switch-color)] w-12 h-12 relative rounded-full transition duration-300 p-1 text-white`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isDarnkmode ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        )}
                    </svg>
                </div>
            </button>
        </div>
    );
}