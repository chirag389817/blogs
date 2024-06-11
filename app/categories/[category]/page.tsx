import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { getPrismaClient } from "@/prisma";
import { notFound } from "next/navigation";

type TPageProps = {
    params: {
        category: string;
    };
    searchParams: {
        page: number | null;
    };
};

const PAGE_LENGTH = 10;

async function page({ params, searchParams }: TPageProps) {
    const category = await getPrismaClient()?.category.findFirst({
        where: {
            name: {
                equals: params.category.replaceAll("-", " "),
                mode: "insensitive"
            }
        },
        include: {
            blogs: {
                orderBy: {
                    date: "desc"
                }
            }
        }
    });
    if (!category) notFound();

    const pageNum = searchParams.page ?? 1;
    const start = (pageNum - 1) * PAGE_LENGTH;
    const end = start + PAGE_LENGTH;

    const blogs = category.blogs.slice(start, end);

    return (
        <main className="min-h-[85vh] flex flex-col ">
            <h1 className="text-center capitalize text-2xl mt-6 text-gray-900 title-font font-semibold dark:text-gray-200">
                {category.name.toLowerCase()} Blogs
            </h1>
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    title={blog.title}
                    description={blog.description}
                    date={blog.date}
                    // category={category.name}
                />
            ))}

            <Pagination
                currentPage={pageNum}
                totalPage={Math.ceil(category.blogs.length / PAGE_LENGTH)}
                urlPrefix={`/categories/${category.name}?`}
            />
        </main>
    );
}

export default page;
