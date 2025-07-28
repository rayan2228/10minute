import Title from "@/shared components/Title";
import { SectionData } from "@/type";
import Image from "next/image";

const CourseFeatures = ({ content }: SectionData) => {
    return (
        <div className={`order-${content.order_idx}`}>
            <Title title={content.name} />
            <div className="flex flex-wrap bg-[#111926] p-5 lg:p-8 mt-4 gap-x-5 gap-y-8 lg:gap-y-10 rounded-lg items-start">
                {content.values.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-start gap-3 lg:gap-4 text-white w-full lg:w-[48%]"
                    >
                        <Image src={item.icon} alt={item.title} width={43} height={43} />
                        <div>
                            <h4 className="text-base lg:text-lg font-semibold">{item.title}</h4>
                            <p className="text-lg text-[#c1c1c1] leading-relaxed">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseFeatures;
