import SliderContainer from "@/shared components/layouts/SliderContainer"
import { CourseData } from "@/type"
import Image from "next/image"
import CourseTitle from "./CourseTitle"

const CourseLayout = ({ content }: { content: CourseData }) => {
    return (
        <div className="flex  text-white py-10 z-10 relative">
            <div className="w-[60%] py-5">
                <CourseTitle content={content} />
            </div>
            <div className="w-[40%]">
                <div className="border-4 border-white">
                    <SliderContainer settings={{ slidesToShow: 1, slidesToScroll: 1 }} >
                        {
                            content.media.map((item: { resource_type: string; resource_value: string; name: string; thumbnail_url?: string; }, index: number) => (
                                item.resource_type === 'image' && item.name !== "sqr_img" &&
                                <div key={index} className="w-[300px] h-[280px]">
                                    <Image src={item?.resource_value} alt={item?.name} width={392} height={220} className="object-contain w-full " />
                                </div>
                            ))
                        }
                    </SliderContainer>
                </div>
            </div>
        </div>
    )
}

export default CourseLayout