
import { fetchProduct } from "@/server/productApi";
import { notFound } from 'next/navigation';
import CourseChecklist from "../@components/CourseChecklist";
import CourseLayout from "../@components/CourseLayout";
import EnrollButton from "../@components/EnrollButton";
import Price from "../@components/Price";
import SectionRenderer from "../@components/SectionRenderer";

export const revalidate = 3600;

export const dynamic = 'force-static';
export const dynamicParams = true;
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string, locale: string }>
}) {
    const { slug, locale: lang } = await params
    try {
        const data = await fetchProduct(slug, lang)
        return {
            title: data.title,
            description: data.description.replace(/<[^>]*>?/gm, '').trim(),
        }
    } catch (error) {
        return {
            title: 'Product Not Found',
            description: 'The requested product could not be found.'
        }
    }
}


export async function generateStaticParams() {
    const popularProducts = [
        { slug: 'ielts-course', locale: 'bn' },
        { slug: 'ielts-course', locale: 'en' },
    ];

    return popularProducts;
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string, locale: string }>
}) {
    const { slug, locale: lang } = await params

    try {
        const data = await fetchProduct(slug, lang)

        return (
            <section className="relative">
                <div
                    className=""
                    style={{
                        backgroundImage: `url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="container">
                        <CourseLayout content={data} />
                    </div>
                </div>
                <div className="container">
                    <div className="flex items-start md:gap-15 md:flex-row flex-col px-4 pt-10">
                        <div className="w-full md:w-[60%]">
                            <SectionRenderer section={data.sections} />
                        </div>
                        <div className="w-full md:w-[35%] xl:border-2 border-t-transparent border-gray-200 bg-white -mt-10">
                            <div className="p-3 flex flex-col gap-3">
                                <Price />
                                <EnrollButton content={data.cta_text} />
                                <CourseChecklist content={data.checklist} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    } catch (error) {
        console.error('Error fetching product:', error);
        notFound();
    }
}