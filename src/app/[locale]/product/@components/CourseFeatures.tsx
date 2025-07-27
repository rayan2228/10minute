import Title from "@/shared components/Title"
import { SectionData } from "@/type"
import Image from "next/image"

const CourseFeatures = ({ content }: SectionData) => {
    return (
        <div className={`order-${content.order_idx}`}>
            <Title title={content.name} />
            <div className="flex flex-wrap bg-[#111926] p-8 mt-4 gap-5 gap-y-10 rounded-lg items-center">
                {
                    content.values.map((item) => (
                        <div key={item.id} className="flex items-start w-[48%] gap-4 text-white">
                            <Image src={item.icon} alt={item.title} width={43} height={43} />
                            <div>
                                <h4 className="text-lg font-semibold">{item.title}</h4>
                                <p className="text-sm text-[#c1c1c1]">{item.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CourseFeatures