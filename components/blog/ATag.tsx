import React, { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type TATagProps = AnchorHTMLAttributes<HTMLAnchorElement>;

function ATag({ className, children, ...props }: TATagProps) {
    return (
        <>
            {" "}
            <a
                className={twMerge("text-blue-600 hover:underline", className)}
                {...props}
            >
                {children}
            </a>{" "}
        </>
    );
}

export default ATag;
