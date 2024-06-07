"use client";

import { useRef } from "react";

type TContentProps = {
    content: string;
};

type TBlogCopyContent = {
    type: "command" | "code";
} & TContentProps;

function CopyButton({ content }: TContentProps) {
    const btnRef = useRef<HTMLButtonElement>(null);
    return (
        <button
            className="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
            ref={btnRef}
            onClick={async (e) => {
                await navigator.clipboard.writeText(content);
                if (btnRef.current) {
                    btnRef.current.textContent = "Copied..";
                    setTimeout(() => {
                        if (btnRef.current) btnRef.current.textContent = "Copy";
                    }, 500);
                }
            }}
        >
            Copy
        </button>
    );
}

function CopyCommand({ content }: TContentProps) {
    return (
        <code className="text-sm sm:text-base flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-1 mb-4 pl-6 pr-3">
            <span className="flex gap-4 w-full">
                <span className="shrink-0 text-gray-500">$</span>
                <span className="flex-1">{content}</span>
            </span>
            <CopyButton content={content} />
        </code>
    );
}

function CopyCode({ content }: TContentProps) {
    return (
        <div className="bg-gray-900 text-white p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Code:</span>
                <CopyButton content={content} />
            </div>
            <div className="overflow-x-auto">
                <pre className="text-gray-300">{content}</pre>
            </div>
        </div>
    );
}

export default function BlogCopyContent(props: TBlogCopyContent) {
    switch (props.type) {
        case "command":
            return <CopyCommand content={props.content} />;
        case "code":
            return <CopyCode content={props.content} />;
    }
}
