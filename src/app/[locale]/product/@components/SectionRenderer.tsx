
// import CourseDetails from './CourseDetails';
// import CourseFeatures from './CourseFeatures';
// import CourseInstructors from './CourseInstructors';
// import CourseLayout from './CourseLayout';


// export default function SectionRenderer({ section }: SectionRendererProps) {
//     // Skip rendering if no content
//     if (!section.content ||
//         (Array.isArray(section.content) && section.content.length === 0) ||
//         (typeof section.content === 'string' && section.content.trim() === '')) {
//         return null;
//     }

//     switch (section.type) {
//         case 'instructor':
//             return <CourseInstructors
//                 instructors={section.content as Instructor[]}
//                 title={section.title}
//             />;
//         case 'features':
//             return <CourseLayout
//                 content={section.content as string}
//                 title={section.title}
//             />;
//         case 'pointers':
//             return <CourseFeatures
//                 content={section.content as string}
//                 title={section.title}
//             />;
//         case 'about':
//             return <CourseDetails
//                 content={section.content as string}
//                 title={section.title}
//             />;
//         default:
//             console.warn(`Unknown section type: ${section.type}`);
//             return null;
//     }
// }