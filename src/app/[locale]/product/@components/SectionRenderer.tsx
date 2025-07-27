import { AllSectionData } from "@/type";
import CourseAbout from "./CourseAbout";
import CourseFeatureExplanations from "./CourseFeatureExplanations";
import CourseFeatures from "./CourseFeatures";
import CourseInstructors from "./CourseInstructors";
import CoursePointers from "./CoursePointers";

export default function SectionRenderer({ section }: AllSectionData) {
    return (
        <div className="flex flex-col gap-5 mt-40 text-one">
            {section.map((sec, index) => {
                switch (sec.type) {
                    case 'instructors':
                        return <CourseInstructors key={index} content={sec} />;
                    case 'features':
                        return <CourseFeatures key={index} content={sec} />;
                    case 'pointers':
                        return <CoursePointers key={index} content={sec} />;
                    case 'about':
                        return <CourseAbout key={index} content={sec} />;
                    case 'feature_explanations':
                        return <CourseFeatureExplanations key={index} content={sec} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
}
