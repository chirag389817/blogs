import React from "react";
import { FaArrowRight } from "react-icons/fa";

export type TBlogCardProps = {
    title: string;
    category?: string;
    description: string;
    date: Date;
};

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

function BlogCard({ title, category, description, date }: TBlogCardProps) {
    const blogLink = `/blogs/${title.toLowerCase().replaceAll(" ", "-")}`;
    return (
        <div className="py-8">
            <h2 className="text-2xl font-medium first-letter:capitalize lowercase text-gray-900 title-font mb-1 dark:text-gray-200">
                {title}
            </h2>
            {category && (
                <a
                    className="font-semibold title-font capitalize text-gray-700 dark:text-gray-400 mr-2 hover:underline"
                    href={`/categories/${category
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                >
                    {category.toLowerCase()}
                </a>
            )}
            <span className="text-gray-500 text-sm">
                {`${date.getDate()} ${
                    months[date.getMonth()]
                } ${date.getFullYear()}`}
            </span>
            <p className="leading-relaxed dark:text-gray-300">{description}</p>
            <a
                className="text-blue-600 text-sm inline-flex gap-2 items-center mt-2 hover:border-b-2 border-blue-600 cursor-pointer"
                href={blogLink}
            >
                Learn More
                <FaArrowRight />
            </a>
        </div>
    );
}

export default BlogCard;
