import RichText from "@/shared components/RichText"
import Title from "@/shared components/Title"
import { SectionData } from "@/type"
import Image from "next/image"
import Link from "next/link"

const CourseInstructors = ({ content }: SectionData) => {
    return (
        <div className={`order-${content.order_idx}`}>
            <Title title={content.name} />
            {
                content.values.map((item, index) => (
                    <div key={index} className="flex rounded-lg items-center border border-gray-200 p-5 mt-4 gap-5">
                        <Image src={item.image} alt={item.name} width={73} height={73} className="rounded-full" />
                        <div className="flex flex-col">
                            {
                                item.has_instructor_page ?
                                    <Link href={"/instructor/" + item.slug} className="text-lg hover:text-two transition-colors">{item.name}</Link>
                                    :
                                    <h4>{item.name}</h4>
                            }
                            <RichText className="text-sm" html={item.description} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CourseInstructors