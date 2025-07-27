
import { CourseData } from "@/type"
import CourseChecklist from "./CourseChecklist"
import CourseTitle from "./CourseTitle"
import CourseTrailer from "./CourseTrailer"
import EnrollButton from "./EnrollButton"
import Price from "./Price"
import SectionRenderer from "./SectionRenderer"

const CourseLayout = ({ content }: { content: CourseData }) => {
    return (
        <div className="flex items-start py-10 z-10 relative gap-15">
            <div className="w-[60%] py-5 text-white">
                <CourseTitle content={content} />
                <SectionRenderer section={content.sections} />
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