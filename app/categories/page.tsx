import { getPrismaClient } from "@/prisma";
import CategoryList from "./CategoryList";

async function page() {
    const cats = (await getPrismaClient()?.category.findMany()) ?? [];
    return (
        <main className="min-h-[85vh] mt-6">
            <CategoryList categories={cats} />
        </main>
    );
}

export default page;
