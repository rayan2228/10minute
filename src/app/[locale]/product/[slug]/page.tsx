import { fetchProduct } from "@/server/productApi";
import CourseLayout from "../@components/CourseLayout";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const data = await fetchProduct(slug)
    return <section className="mt-5 relative">
        <div className="min-h-[300px] absolute top-0 left-0 w-full " style={{
            backgroundImage: `url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}></div>
        <div className="container">
            <CourseLayout content={data} />
        </div>
    </section>
}