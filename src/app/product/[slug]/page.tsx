import { fetchProduct } from "@/server/productApi";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const data = await fetchProduct(slug)
    console.log(data);

    return <div>My Post: {slug}</div>
}