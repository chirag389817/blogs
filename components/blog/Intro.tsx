import { twMerge } from "tailwind-merge";
import { months } from "../BlogCard";

type TIntroProps = {
    title: string;
    category: string;
    image?: string;
    date: Date;
};

function BlogIntroBase({
    category,
    title,
    date,
    isShowingImage = false
}: {
    category: string;
    title: string;
    date: Date;
    isShowingImage?: boolean;
}) {
    return (
        <div className="py-4 mb-10 z-20">
            {category && (
                <a
                    href={`/categories/${category
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    className="px-4 py-1 bg-black text-gray-200 capitalize inline-flex items-center justify-center mb-2 rounded-md"
                >
                    {category.toLowerCase()}
                </a>
            )}
            <h2
                className={twMerge(
                    "text-4xl font-semibold leading-tight",
                    isShowingImage
                        ? "text-gray-100"
                        : "text-gray-800 dark:text-gray-100"
                )}
            >
                {title}
            </h2>
            <p className="font-semibold text-gray-500 text-xs">{`${date.getDate()} ${
                months[date.getMonth()]
            } ${date.getFullYear()}`}</p>
        </div>
    );
}

function Intro(props: TIntroProps) {
    return props.image ? (
        <>
            <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-[24em]">
                <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,.7))]"></div>
                <img
                    src={props.image}
                    className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                />
                <div className="p-4 absolute bottom-0 left-0 z-20">
                    <BlogIntroBase {...props} isShowingImage={true} />
                </div>
            </div>
        </>
    ) : (
        <BlogIntroBase {...props} isShowingImage={false} />
    );
}

export default Intro;
