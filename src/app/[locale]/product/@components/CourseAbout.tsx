import Title from '@/shared components/Title'
import { SectionData } from '@/type'

const CourseAbout = ({ content }: SectionData) => {
    return (
        <div>
            <Title title={content.name} />
        </div>
    )
}

export default CourseAbout