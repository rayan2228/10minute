import RichText from "@/shared components/RichText";
import Title from "@/shared components/Title";
import { SectionData } from "@/type";
import Image from "next/image";
import Link from "next/link";

const CourseInstructors = ({ content }: SectionData) => {
    return (
        <div className={`order-${content.order_idx}`}>
            <Title title={content.name} />
            {content.values.map((item, index) => (
                <div
                    key={index}
                    className="flex   rounded-lg items-center border border-gray-200 p-1 sm:p-5 mt-4 gap-4 sm:gap-5"
                >
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={73}
                        height={73}
                        className="rounded-full  "
                    />
                    <div className="flex flex-col text-sm sm:text-base">
                        {item.has_instructor_page ? (
                            <Link
                                href={`/instructor/${item.slug}`}
                                className="text-base sm:text-lg font-medium hover:text-two transition-colors"
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <h4 className="text-base sm:text-lg font-medium">{item.name}</h4>
                        )}
                        <RichText className="text-gray-600 w-full  text-sm leading-relaxed" html={item.description} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseInstructors;
