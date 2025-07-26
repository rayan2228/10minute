
import { CourseData } from "@/type"
import CourseTitle from "./CourseTitle"
import CourseTrailer from "./CourseTrailer"

const CourseLayout = ({ content }: { content: CourseData }) => {
    return (
        <div className="flex  text-white py-10 z-10 relative">
            <div className="w-[60%] py-5">
                <CourseTitle content={content} />
            </div>
            <div className="w-[40%]">
                <div className="border-4 border-white">
                    <CourseTrailer content={content.media} />
                </div>
            </div>
        </div>
    )
}

export default CourseLayout