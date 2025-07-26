import RichText from "@/shared components/RichText"
import { CourseData } from "@/type"
import Image from "next/image"
import Link from "next/link"

const CourseTitle = ({ content }: { content: CourseData }) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-4xl">{content.title}</h1>
            <div className="inline-flex text-base font-normal gap-2">
                <Image src={"https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"} alt="review_star" width={136} height={24} />
                <Link href={"/"}>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</Link>
            </div>
            <RichText className="text-[#a3a3a3] w-[85%] leading-6.5" html={content.description} />
        </div>

    )
}

export default CourseTitle