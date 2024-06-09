import BlogCopyContent from "@/components/blog/BlogCopyContent";
import BlogImage from "@/components/blog/BlogImage";
import BlogImageIntro from "@/components/blog/BlogImageIntro";
import BlogParagraph from "@/components/blog/BlogParagraph";
import BlogTitle from "@/components/blog/BlogTitle";

type PageProps = {
    params: {
        slug: string;
    };
};

function page({ params }: PageProps) {
    return (
        <main className="mt-10">
            <BlogImageIntro
                title="Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor."
                category="Nutrition"
                image="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                date="14 Aug 2024"
            />

            <BlogParagraph>
                Advantage old had otherwise sincerity dependent additions. It in
                adapted natural hastily is justice. Six draw you him full not
                mean evil. Prepare garrets it expense windows shewing do an. She
                projection advantages resolution son indulgence. Part sure on no
                long life am at ever. In songs above he as drawn to. Gay was
                outlived peculiar rendered led six.
            </BlogParagraph>
            <BlogParagraph>
                Difficulty on insensible reasonable in. From as went he they.
                Preference themselves me as thoroughly partiality considered on
                in estimating. Middletons acceptance discovered projecting so is
                so or. In or attachment inquietude remarkably comparison at an.
                Is surrounded prosperous stimulated am me discretion expression.
                But truth being state can she china widow. Occasional preference
                fat remarkably now projecting uncommonly dissimilar. Sentiments
                projection particular companions interested do at my delightful.
                Listening newspaper in advantage frankness to concluded
                unwilling.
            </BlogParagraph>
            <BlogParagraph>
                Adieus except say barton put feebly favour him. Entreaties
                unpleasant sufficient few pianoforte discovered uncommonly ask.
                Morning cousins amongst in mr weather do neither. Warmth object
                matter course active law spring six. Pursuit showing tedious
                unknown winding see had man add. And park eyes too more him.
                Simple excuse active had son wholly coming number add. Though
                all excuse ladies rather regard assure yet. If feelings so
                prospect no as raptures quitting.
            </BlogParagraph>

            <BlogParagraph type="summary">
                Sportsman do offending supported extremity breakfast by
                listening. Decisively advantages nor expression unpleasing she
                led met. Estate was tended ten boy nearer seemed. As so seeing
                latter he should thirty whence. Steepest speaking up attended it
                as. Made neat an on be gave show snug tore.
            </BlogParagraph>

            <BlogParagraph>
                Exquisite cordially mr happiness of neglected distrusts.
                Boisterous impossible unaffected he me everything. Is fine loud
                deal an rent open give. Find upon and sent spot song son eyes.
                Do endeavor he differed carriage is learning my graceful. Feel
                plan know is he like on pure. See burst found sir met think
                hopes are marry among. Delightful remarkably new assistance saw
                literature mrs favourable.
            </BlogParagraph>
            <BlogTitle>Uneasy barton seeing remark happen his has</BlogTitle>
            <BlogParagraph type="line">
                Exquisite cordially mr happiness
            </BlogParagraph>
            <BlogCopyContent type="command" content="afghgeFGF" />
            <BlogParagraph type="line">
                Exquisite cordially mr happiness
            </BlogParagraph>
            <BlogCopyContent
                type="code"
                content={`<div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Code:</span>
                <CopyButton content={props.content} />
            </div>
            <div className="overflow-x-auto">
                <pre className="text-gray-300">jhsdfghjjhgf</pre>
            </div>`}
            />
            <BlogParagraph type="line">
                Exquisite cordially mr happiness
            </BlogParagraph>
            <BlogCopyContent type="command" content="afghgeFGF" />
            <BlogParagraph>
                Guest it he tears aware as. Make my no cold of need. He been
                past in by my hard. Warmly thrown oh he common future. Otherwise
                concealed favourite frankness on be at dashwoods defective at.
                Sympathize interested simplicity at do projecting increasing
                terminated. As edward settle limits at in.
            </BlogParagraph>
            <BlogImage src="/profile.png" />
        </main>
    );
}

export default page;
