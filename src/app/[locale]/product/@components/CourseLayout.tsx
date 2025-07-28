
import { CourseData } from "@/type"
import CourseTitle from "./CourseTitle"
import CourseTrailer from "./CourseTrailer"

const CourseLayout = ({ content }: { content: CourseData }) => {
    return (
        <div className="flex items-end lg:items-start  md:gap-15 md:flex-row flex-col px-4 pt-10">
            <div className="w-full md:w-[60%] py-5 text-white">
                <CourseTitle content={content} />
            </div>
            <div className="w-full md:w-[35%] border-b-transparent  sm:border-2 border-gray-200 md:bg-white md:order-1 -order-1 ">
                <CourseTrailer content={content.media} />
            </div>
        </div>
    )
}

export default CourseLayout