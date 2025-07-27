import Title from "@/shared components/Title"
import { SectionData } from "@/type"

const CoursePointers = ({ content }: SectionData) => {
    return (
        <div className={`order-${content.order_idx}`}>
            <Title title={content.name} />
            <div className="flex flex-wrap border border-gray-200  p-5 mt-4 gap-5 gap-y-7 rounded-lg">
                {
                    content.values.map((item) => (
                        <div key={item.id} className="w-[48%] flex items-start gap-3 ">
                           <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className="mr-1 mt-[2px]" style={{color: '#6294F8'}} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <p  className={`text-[${item.color}] font-medium text-base flex-1`}>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CoursePointers