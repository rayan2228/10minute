import Title from "@/shared components/Title";
import { SectionData } from "@/type";
import Image from "next/image";

const CourseFeatureExplanations = ({ content }: SectionData) => {
    return (
        <div className={`order-${content.order_idx}`}>
            <Title title={content.name} />
            <div className="mt-4 rounded-lg border border-gray-200 p-2.5 flex flex-col gap-4">
                {content.values.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between gap-6 items-start p-4 relative border-b border-gray-200 last:border-b-0 flex-wrap md:flex-nowrap"
                    >
                        <div className="flex flex-col gap-2 max-w-xl">
                            <h4 className="text-one font-semibold text-lg">{item.title}</h4>
                            {item.checklist.map((innerItem: string, index: number) => (
                                <div key={index} className="flex items-start gap-3">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                        className="text-blue-500 mt-1 shrink-0"
                                        height={20}
                                        width={20}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-base font-medium text-gray-700">{innerItem}</p>
                                </div>
                            ))}
                        </div>

                        {item.file_type === "image" && item.file_url && (
                            <div className=" mt-4 md:mt-0">
                                <Image
                                    src={item.file_url}
                                    alt={item.title}
                                    width={250}
                                    height={200}
                                    className="rounded-md object-cover "
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseFeatureExplanations;
