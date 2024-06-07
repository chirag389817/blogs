import Image from "next/image";

type TBlogImageProps = {
    src: string;
    alt?: string;
};

function BlogImage({ src, alt = "image" }: TBlogImageProps) {
    if (!src) return <></>;
    return (
        <div>
            <Image
                className="mb-4 w-full max-h-[80vh] mx-auto object-contain"
                width={2048}
                height={2048}
                src={src}
                alt={alt}
            />
        </div>
    );
}

export default BlogImage;
