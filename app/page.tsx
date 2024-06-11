import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { getPrismaClient } from "@/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

async function page() {
    const blogs =
        (await getPrismaClient()?.blog.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            },
            include: {
                category: true
            }
        })) ?? [];

    return (
        <main className="min-h-[85vh] flex flex-col ">
            <section>
                <h1 className="text-center capitalize text-2xl mt-6 text-gray-900 title-font font-semibold dark:text-gray-200">
                    Latest Blogs
                </h1>
                {blogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        description={blog.description}
                        date={blog.date}
                        category={blog.category.name}
                    />
                ))}
                <div className="text-end mb-10">
                    <a
                        className="text-blue-600 text-xl inline-flex gap-2 items-center mt-2 hover:border-b-2 border-blue-600 cursor-pointer"
                        href="/blogs"
                        id="about"
                    >
                        View all blogs
                        <FaArrowRight />
                    </a>
                </div>
            </section>
            <section className="text-gray-900 dark:text-gray-200 text-center my-10">
                {/* <h1 className="text-center capitalize text-2xl mt-6 text-gray-900 title-font font-semibold dark:text-gray-200">
                    About
                </h1> */}
                <div className="flex justify-center mb-6">
                    <Image
                        className="w-72 h-8w-72 object-cover rounded-full"
                        src="/profile-square.png"
                        alt="Image"
                        height={5120}
                        width={5120}
                    />
                </div>

                <h6 className="font-medium text-lg opacity-95 md:text-2xl uppercase mb-6">
                    Chirag Patel
                </h6>

                <h1 className="font-normal text-3xl md:text-4xl leading-none mb-8">
                    Full Stack Developer
                </h1>

                <p className="font-normal opacity-90 text-md md:text-xl mb-6">
                    I have a passion for software. I enjoy creating tools that
                    make life easier for people.
                </p>

                <a
                    href="#"
                    className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                >
                    Portfolio
                </a>
            </section>
        </main>
    );
}

export default page;
