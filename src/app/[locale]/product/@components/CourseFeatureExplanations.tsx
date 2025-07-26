import Title from "@/shared components/Title"
import { SectionData } from "@/type"

const CourseFeatureExplanations = ({ content }: SectionData) => {
    return (
      <div>
            <Title title={content.name} />
        </div>
    )
}

export default CourseFeatureExplanations