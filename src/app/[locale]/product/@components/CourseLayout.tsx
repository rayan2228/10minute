
import { CourseData } from "@/type"
import CourseChecklist from "./CourseChecklist"
import CourseTitle from "./CourseTitle"
import CourseTrailer from "./CourseTrailer"
import EnrollButton from "./EnrollButton"
import Price from "./Price"
import SectionRenderer from "./SectionRenderer"

const CourseLayout = ({ content }: { content: CourseData }) => {
    return (
        <div className="flex items-start py-10 z-10 relative gap-15 lg:flex-row flex-col px-4">
            <div className="w-full lg:w-[60%] py-5 text-white">
                <CourseTitle content={content} className="lg:block hidden" />
                <SectionRenderer section={content.sections} />
            </div>
            <div className="w-full lg:w-[40%] border-2 border-gray-200 bg-white -order-1 lg:order-1 lg:p-0 p-1 rounded-lg">
                <CourseTrailer content={content.media} />
                <CourseTitle content={content} className="lg:hidden block p-3" />
                <div className="p-3 flex flex-col gap-3">
                    <Price />
                    <EnrollButton content={content.cta_text} />
                    <CourseChecklist content={content.checklist} />
                </div>
            </div>
        </div>
    )
}

export default CourseLayout