import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";

type TPageProps = {
    params: {
        category: string;
    };
};
function page({ params }: TPageProps) {
    return (
        <main className="min-h-[85vh]">
            <h1 className="text-center capitalize text-2xl mt-6 text-gray-900 title-font font-semibold dark:text-gray-200">
                {params.category} Blogs
            </h1>
            <BlogCard
                title="Bitters hashtag waistcoat fashion axe chia unicorn"
                category="Category"
                description="Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer."
                blogSlug="first-blog"
                showCategory={false}
            />
            <BlogCard
                title="Bitters hashtag waistcoat fashion axe chia unicorn"
                category="Category"
                description="Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer."
                blogSlug="first-blog"
            />
            <Pagination
                currentPage={4}
                totalPage={8}
                urlPrefix="/categories/abcd?"
            />
        </main>
    );
}

export default page;
