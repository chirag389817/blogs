import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                title: "rgba(var(--title))"
            }
        }
    },
    plugins: []
};
export default config;
