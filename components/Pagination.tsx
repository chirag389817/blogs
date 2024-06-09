import {
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight
} from "react-icons/md";
import { twMerge } from "tailwind-merge";

type TPaginationProps = {
    currentPage: number;
    totalPage: number;
    urlPrefix: string;
};

function PageLink({
    children,
    href,
    current = false
}: {
    children: React.ReactNode;
    href: string;
    current?: boolean;
}) {
    return (
        <li>
            <a
                className={twMerge(
                    "mx-1 flex h-9 w-9 items-center justify-center rounded-full border dark:border-gray-100 border-gray-400 bg-transparent p-0 text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300",
                    current && "bg-blue-600 text-gray-200"
                )}
                href={href}
            >
                {children}
            </a>
        </li>
    );
}

function CustomPagination({
    currentPage,
    totalPage,
    urlPrefix
}: TPaginationProps) {
    return (
        <>
            {currentPage - 3 >= 1 && (
                <>
                    <PageLink href={`${urlPrefix}page=1`}>1</PageLink>
                    {currentPage - 4 >= 1 && <span>...</span>}
                </>
            )}
            {currentPage - 2 >= 1 && (
                <PageLink href={`${urlPrefix}page=${currentPage - 2}`}>
                    {currentPage - 2}
                </PageLink>
            )}
            {currentPage - 1 >= 1 && (
                <PageLink href={`${urlPrefix}page=${currentPage - 1}`}>
                    {currentPage - 1}
                </PageLink>
            )}
            <PageLink href="#" current>
                {currentPage}
            </PageLink>
            {currentPage + 1 <= totalPage && (
                <PageLink href={`${urlPrefix}page=${currentPage + 1}`}>
                    {currentPage + 1}
                </PageLink>
            )}
            {currentPage + 2 <= totalPage && (
                <PageLink href={`${urlPrefix}page=${currentPage + 2}`}>
                    {currentPage + 2}
                </PageLink>
            )}
            {currentPage + 3 <= totalPage && (
                <>
                    {currentPage + 4 <= totalPage && <span>...</span>}
                    <PageLink href={`${urlPrefix}page=${totalPage}`}>
                        {totalPage}
                    </PageLink>
                </>
            )}
        </>
    );
}

function LinearPagination({
    currentPage,
    totalPage,
    urlPrefix
}: TPaginationProps) {
    return (
        <>
            {Array(totalPage)
                .fill(1)
                .map((num, idx) => (
                    <PageLink
                        href={`${urlPrefix}page=${idx + 1}`}
                        current={idx + 1 === currentPage}
                    >
                        {idx + 1}
                    </PageLink>
                ))}
        </>
    );
}

function Pagination(props: TPaginationProps) {
    return (
        <ul className="flex text-sm justify-center items-end py-6">
            {props.currentPage > 1 && (
                <PageLink
                    href={`${props.urlPrefix}page=${props.currentPage - 1}`}
                >
                    <MdKeyboardDoubleArrowLeft className="text-xl" />
                </PageLink>
            )}
            {props.totalPage > 7 ? (
                <CustomPagination {...props} />
            ) : (
                <LinearPagination {...props} />
            )}
            {props.currentPage < props.totalPage && (
                <PageLink
                    href={`${props.urlPrefix}page=${props.currentPage + 1}`}
                >
                    <MdKeyboardDoubleArrowRight className="text-xl" />
                </PageLink>
            )}
        </ul>
    );
}

export default Pagination;
