"use client";

import StringToReactComponent from "string-to-react-component";
import ATag from "./blog/ATag";
import Copy from "./blog/Copy";
import Image from "./blog/Image";
import Paragraph from "./blog/Paragraph";
import Title from "./blog/Title";

function BlogRenderer({ content }: { content?: string }) {
    return (
        <section className="mb-10">
            <StringToReactComponent
                data={{ ATag, Copy, Image, Paragraph, Title }}
            >
                {`({ ATag, Copy, Image, Paragraph, Title })=>(
                    <>
                        ${content}
                    </>)`}
            </StringToReactComponent>
        </section>
    );
}

export default BlogRenderer;
