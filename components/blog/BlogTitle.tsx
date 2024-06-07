type TBlogTitleProps = {
    type?: "primary";
    children: React.ReactNode;
};

function BlogTitle({ children }: TBlogTitleProps) {
    return (
        <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            {children}
        </h2>
    );
}

export default BlogTitle;
