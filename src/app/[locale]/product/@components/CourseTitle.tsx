import RichText from "@/shared components/RichText";
import { CourseData } from "@/type";
import Image from "next/image";
import Link from "next/link";

const CourseTitle = ({ content, className }: { content: CourseData, className?: string }) => {
    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            {/* Title */}
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight">
                {content.title}
            </h1>

            {/* Rating & Link */}
            <div className="inline-flex items-center text-sm sm:text-base font-normal gap-2 flex-wrap lg:justify-start lg:text-left justify-center text-center">
                <Image
                    src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                    alt="review_star"
                    width={136}
                    height={24}
                    className="h-6 w-auto"
                />
                <Link href="/" className="lg:text-white ">
                    (৮২.৬% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                </Link>
            </div>

            {/* Description */}
            <RichText
                className="text-[#a3a3a3] leading-relaxed max-w-full sm:max-w-[90%] md:max-w-[85%]"
                html={content.description}
            />
        </div>
    );
};

export default CourseTitle;
