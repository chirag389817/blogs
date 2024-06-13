type TParagraphProps = {
    children: React.ReactNode;
    type?: "normal" | "summary" | "line";
};

function Paragraph({ children, type = "normal" }: TParagraphProps) {
    if (!children) return <></>;
    switch (type) {
        case "normal":
            return <p className="pb-6"> {children}</p>;
        case "summary":
            return (
                <div className="border-l-4 border-gray-500 dark:border-gray-400 pl-4 mb-6 italic rounded">
                    {children}
                </div>
            );
        case "line":
            return <p className="pb-2"> {children}</p>;
    }
}

export default Paragraph;
