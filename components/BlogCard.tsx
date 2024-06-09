import React from "react";
import { FaArrowRight } from "react-icons/fa";

export type TBlogCardProps = {
    showCategory?: boolean;
    title: string;
    category?: string;
    description: string;
    blogSlug: string;
};

function BlogCard({
    title,
    category,
    description,
    blogSlug,
    showCategory = true
}: TBlogCardProps) {
    return (
        <div className="py-8">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-1 dark:text-gray-200">
                {title}
            </h2>
            {showCategory && category && (
                <a
                    className="font-semibold title-font capitalize text-gray-700 dark:text-gray-400 mr-2 hover:underline"
                    href={`/categories/${category}`}
                >
                    {category}
                </a>
            )}
            <span className="text-gray-500 text-sm">12 Jun 2019</span>
            <p className="leading-relaxed dark:text-gray-300">{description}</p>
            <a
                className="text-blue-600 text-sm inline-flex gap-2 items-center mt-2 hover:border-b-2 border-blue-600 cursor-pointer"
                href={`/blogs/${blogSlug}`}
            >
                Learn More
                <FaArrowRight />
            </a>
        </div>
    );
}

export default BlogCard;
