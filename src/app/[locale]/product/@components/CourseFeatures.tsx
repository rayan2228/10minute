import Title from "@/shared components/Title";
import { SectionData } from "@/type";
import Image from "next/image";

const CourseFeatures = ({ content }: SectionData) => {
    return (
        <div className={`order-${content.order_idx}`}>
            <Title title={content.name} />
            <div className="flex flex-wrap bg-[#111926] p-5 sm:p-8 mt-4 gap-x-5 gap-y-8 sm:gap-y-10 rounded-lg items-start">
                {content.values.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-start gap-3 sm:gap-4 text-white w-full sm:w-[48%]"
                    >
                        <Image src={item.icon} alt={item.title} width={43} height={43} />
                        <div>
                            <h4 className="text-base sm:text-lg font-semibold">{item.title}</h4>
                            <p className="text-sm text-[#c1c1c1] leading-relaxed">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseFeatures;
