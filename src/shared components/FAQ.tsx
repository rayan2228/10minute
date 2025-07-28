"use client";

import { SectionData } from "@/type";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import RichText from "./RichText";
import Title from "./Title";

const FAQ = ({ content }: SectionData) => {
    return (
        <div className={`order-${content.order_idx} w-auto`}>
            <Title title={content.name} />

            <div className="mt-4 rounded-lg border border-gray-200 divide-y divide-gray-200">
                {content.values.map((item, index) => (
                    <Disclosure key={item.id ?? index} defaultOpen={index === 0}>
                        {({ open }) => (
                            <>
                                <DisclosureButton className={`flex justify-between items-center w-full p-5 text-left text-lg font-medium text-gray-900 hover:bg-gray-50 transition rounded-t ${open ? 'bg-gray-50' : ''}`}>
                                    <div className="flex-1">
                                        <RichText html={item.question} className="!m-0" />
                                    </div>
                                    <ChevronDownIcon
                                        className={`h-5 w-5 ml-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""
                                            }`}
                                    />
                                </DisclosureButton>
                                <DisclosurePanel className="p-5 bg-white rounded-b">
                                    <RichText className="prose text-base !font-medium wrap-anywhere" html={item.answer} />
                                </DisclosurePanel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
