import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { getPrismaClient } from "@/prisma";
import { notFound } from "next/navigation";

type TPageProps = {
    searchParams: {
        page: number | null;
    };
};

const PAGE_LENGTH = 10;

async function page({ searchParams }: TPageProps) {
    const allBlogs =
        (await getPrismaClient()?.blog.findMany({
            orderBy: {
                date: "desc"
            },
            include: {
                category: true
            }
        })) ?? [];

    const pageNum = searchParams.page ?? 1;
    if (allBlogs.length < (pageNum - 1) * PAGE_LENGTH) notFound();

    const start = (pageNum - 1) * PAGE_LENGTH;
    const end = start + PAGE_LENGTH;

    const blogs = allBlogs.slice(start, end);

    return (
        <main className="min-h-[85vh] flex flex-col ">
            {/* <h1 className="text-center capitalize text-2xl mt-6 text-gray-900 title-font font-semibold dark:text-gray-200">
                Write a good quote may be
            </h1> */}
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    title={blog.title}
                    description={blog.description}
                    date={blog.date}
                    category={blog.category.name}
                />
            ))}

            <Pagination
                currentPage={pageNum}
                totalPage={Math.ceil(allBlogs.length / PAGE_LENGTH)}
                urlPrefix={`/blogs?`}
            />
        </main>
    );
}

export default page;
