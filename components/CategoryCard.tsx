export type TCategoryProps = {
    name: string;
    thumb: string;
    description?: string;
};

function CategoryCard({ name, description, thumb }: TCategoryProps) {
    return (
        <a
            className="group relative m-0 flex flex-grow cursor-pointer h-60 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg mx-auto"
            href={`/categories/${name}`}
        >
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                <img
                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                    src={thumb}
                    alt="category thumbnail"
                />
            </div>
            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <h1 className="font-serif text-2xl font-bold text-white shadow-xl capitalize">
                    {name}
                </h1>
                <h1 className="text-sm font-light text-gray-200 shadow-xl">
                    {description}
                </h1>
            </div>
        </a>
    );
}

export default CategoryCard;
