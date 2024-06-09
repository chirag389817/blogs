"use client";

import CategoryCard, { TCategoryProps } from "@/components/CategoryCard";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function CategoryList({ categories }: { categories: TCategoryProps[] }) {
    const [filteredCategories, setFilteredCategories] = useState(categories);
    const filterCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilteredCategories(
            categories.filter((cat) => cat.name.includes(e.currentTarget.value))
        );
    };
    return (
        <>
            <div className="flex items-center rounded-full dark:bg-gray-800 bg-white text-gray-700 dark:text-gray-400 p-2 w-full mb-4">
                <FaSearch className="mx-4 text-gray-500" />
                <input
                    type="text"
                    className="w-full flex bg-transparent pl-2 outline-0"
                    placeholder="Search for a category of your choice"
                    onChange={filterCategories}
                />
            </div>

            <div className="grid grid-cols-2 justify-center md:grid-cols-3 gap-4 mb-6">
                {filteredCategories.map((cat) => (
                    <CategoryCard {...cat} />
                ))}
            </div>
        </>
    );
}

export default CategoryList;
