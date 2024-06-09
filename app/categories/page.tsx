import CategoryList from "./CategoryList";

const categories = [
    { name: "123", thumb: "/profile.png" },
    {
        name: "234",
        thumb: "/profile.png",
        description: "my des is aewsome as it is very good"
    },
    { name: "345", thumb: "/profile.png", description: "my des is aewsome" },
    { name: "456", thumb: "/profile.png" },
    { name: "567", thumb: "/profile.png" },
    { name: "678", thumb: "/profile.png", description: "my des is aewsome" },
    { name: "789", thumb: "/profile.png", description: "my des is aewsome" },
    { name: "890", thumb: "/profile.png" }
];

function page() {
    return (
        <main className="min-h-[85vh] mt-6">
            <CategoryList categories={categories} />
        </main>
    );
}

export default page;
