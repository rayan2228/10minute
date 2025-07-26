import CourseAbout from "./CourseAbout";
import CourseFeatureExplanations from "./CourseFeatureExplanations";
import CourseFeatures from "./CourseFeatures";
import CourseInstructors from "./CourseInstructors";
import CoursePointers from "./CoursePointers";

export default function SectionRenderer({ section }: {
    section: {
        type: string;
        name: string;
        description: string;
        bg_color: string;
        order_idx: number;
        values: {
            description: string;
            has_instructor_page: boolean;
            image: string;
            name: string;
            short_description: string;
            slug: string;
        };
    }[];
}) {
    return (
        <>
            {section.map((sec, index) => {
                switch (sec.type) {
                    case 'instructors':
                        return <CourseInstructors key={index} />;
                    case 'features':
                        return <CourseFeatures key={index} />;
                    case 'pointers':
                        return <CoursePointers key={index} />;
                    case 'about':
                        return <CourseAbout key={index} />;
                    case 'feature_explanations':
                        return <CourseFeatureExplanations key={index} />;
                    default:
                        console.warn(`Unknown section type: ${sec.type}`);
                        return null;
                }
            })}
        </>
    );
}
