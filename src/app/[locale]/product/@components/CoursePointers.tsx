import Title from "@/shared components/Title"
import { SectionData } from "@/type"

const CoursePointers = ({ content }: SectionData) => {
    return (
        <div>
            <Title title={content.name} />
        </div>
    )
}

export default CoursePointers