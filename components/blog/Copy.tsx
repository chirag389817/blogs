"use client";

import { useRef } from "react";

type TContentProps = {
    content: string;
};

export type TCopyProps = {
    type: "command" | "code";
} & TContentProps;

function CopyButton({ content }: TContentProps) {
    const btnRef = useRef<HTMLButtonElement>(null);
    return (
        <div className="hidden justify-end mb-2 group-hover:flex absolute w-full left-0 top-0">
            <button
                className="code font-mono bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-sm"
                ref={btnRef}
                onClick={async (e) => {
                    await navigator.clipboard.writeText(content);
                    if (btnRef.current) {
                        btnRef.current.textContent = "Copied..";
                        setTimeout(() => {
                            if (btnRef.current)
                                btnRef.current.textContent = "Copy";
                        }, 500);
                    }
                }}
            >
                Copy
            </button>
        </div>
    );
}

function CopyCommand({ content }: TContentProps) {
    return (
        <code className="text-sm sm:text-base flex text-left items-center  bg-gray-800 text-gray-200 rounded-lg mb-4 group relative">
            <CopyButton content={content} />
            <span className="flex gap-4 w-full pl-6 pr-3 p-1">
                <span className="shrink-0 text-gray-500">$</span>
                <span className="flex-1">{content}</span>
            </span>
        </code>
    );
}

function CopyCode({ content }: TContentProps) {
    return (
        <div className="bg-gray-800 text-gray-200 rounded-md mb-4 group relative">
            <CopyButton content={content} />
            <div className="overflow-x-auto p-1  pl-6 pr-3 ">
                <pre className="text-gray-300">{content}</pre>
            </div>
        </div>
    );
}

export default function Copy(props: TCopyProps) {
    switch (props.type) {
        case "command":
            return <CopyCommand content={props.content} />;
        case "code":
            return <CopyCode content={props.content} />;
    }
}
