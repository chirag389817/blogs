import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-title bg-red-600">Helo</h1>
            <ThemeSwitch />
        </main>
    );
}
