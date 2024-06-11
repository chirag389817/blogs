import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const successData = { revalidated: true, message: "Categories revalidated" };

export async function GET(request: Request) {
    const accessToken = request.headers.get("access-token");
    if (accessToken === process.env.ACCESS_TOKEN) {
        revalidatePath("/categories");
        return Response.json(successData);
    } else notFound();
}
