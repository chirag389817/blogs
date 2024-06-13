import BlogIntro from "@/components/blog/Intro";
import BlogRenderer from "@/components/BlogRenderer";
import { getPrismaClient } from "@/prisma";
import { notFound } from "next/navigation";

type PageProps = {
    params: {
        slug: string;
    };
};

async function getBlog(slug: string) {
    return await getPrismaClient()?.blog.findFirst({
        where: {
            title: { equals: slug.replaceAll("-", " "), mode: "insensitive" }
        },
        include: { category: true }
    });
}

async function page({ params }: PageProps) {
    const blog = await getBlog(params.slug);
    if (!blog) notFound();

    return (
        <main className="mt-10 min-h-[85vh]">
            <BlogIntro
                title={blog.title}
                category={blog.category.name}
                date={blog.date}
            />
            <BlogRenderer content={blog.content} />
        </main>
    );
}

export default page;
