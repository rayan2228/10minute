import { fetchProduct } from "@/server/productApi";
import CourseLayout from "../@components/CourseLayout";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string, locale: string }>
}) {
    const { slug, locale: lang } = await params
    console.log("t", lang);

    const data = await fetchProduct(slug, lang)
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