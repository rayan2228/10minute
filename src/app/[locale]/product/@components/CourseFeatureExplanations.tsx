import Title from "@/shared components/Title"
import { SectionData } from "@/type"
import Image from "next/image"

const CourseFeatureExplanations = ({ content }: SectionData) => {
    return (
        <div className={`order-${content.order_idx}`}>
            <Title title={content.name} />
            <div className="mt-4 rounded-lg border border-gray-200 p-2.5 flex flex-col gap-4 ">
                {
                    content.values.map((item) => (
                        <div key={item.id} className="flex items-start gap-3 p-2.5 justify-between first:after:content-[''] first:after:w-[98%] first:after:h-[1px] first:after:bg-gray-200 first:after:absolute first:after:-bottom-2 first:after:left-0 first:relative">
                            <div className="flex flex-col gap-2 ">
                                <h4 className="text-one font-medium">{item.title}</h4>
                                {
                                    item.checklist.map((innerItem: string) => (
                                        <div key={item.id} className=" flex items-center gap-3 ">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className="mr-1 mt-[2px]" style={{ color: '#6294F8' }} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <p className={` font-medium text-base flex-1`}>{innerItem}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                item.file_type === "image" &&
                                <Image src={item.file_url} alt={item.title} width={250} height={200} />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CourseFeatureExplanations