type TTitleProps = {
    type?: "primary";
    children: React.ReactNode;
};

function Title({ children }: TTitleProps) {
    return (
        <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-semibold my-4">
            {children}
        </h2>
    );
}

export default Title;
