type TBlogImageIntroProps = {
    title: string;
    category: string;
    image: string;
    date?: string;
};

function BlogImageIntro(props: TBlogImageIntroProps) {
    return (
        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-[24em]">
            <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,.7))]"></div>
            <img
                src={props.image}
                className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
                <a
                    href="#"
                    className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2 rounded-md"
                >
                    {props.category}
                </a>
                <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                    {props.title}
                </h2>
                <p className="font-semibold text-gray-400 text-xs">
                    {props.date}
                </p>
            </div>
        </div>
    );
}

export default BlogImageIntro;
