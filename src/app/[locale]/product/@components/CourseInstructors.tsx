import Title from "@/shared components/Title"
import { SectionData } from "@/type"

const CourseInstructors = ({ content }: SectionData) => {
    return (
        <div>
            <Title title={content.name} />
        </div>
    )
}

export default CourseInstructors