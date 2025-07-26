
import { CourseData } from "@/type"
import CourseTitle from "./CourseTitle"
import CourseTrailer from "./CourseTrailer"
import EnrollButton from "./EnrollButton"
import Price from "./Price"
import CourseChecklist from "./CourseChecklist"

const CourseLayout = ({ content }: { content: CourseData }) => {
    return (
        <div className="flex  py-10 z-10 relative">
            <div className="w-[60%] py-5 text-white">
                <CourseTitle content={content} />
            </div>
            <div className="w-[40%] border-2 border-gray-200 bg-white ">
                <CourseTrailer content={content.media} />
                <div className="p-3">
                    <Price />
                    <EnrollButton content={content.cta_text} />
                    <CourseChecklist content={content.checklist} />
                </div>
            </div>
        </div>
    )
}

export default CourseLayout