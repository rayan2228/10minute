'use client';

import RichText from '@/shared components/RichText';
import Title from '@/shared components/Title';
import { SectionData } from '@/type';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';

const CourseAbout = ({ content }: SectionData) => {
    return (
        <div className={`order-${content.order_idx}`}>
            <Title title={content.name} />

            <div className="mt-4 rounded-lg border border-gray-200 divide-y divide-gray-200">
                {content.values.map((item, index) => (
                    <Disclosure key={item.id} defaultOpen={index === 0}>
                        {({ open }) => (
                            <>
                                <DisclosureButton
                                    className="flex justify-between items-center w-full p-5 text-left text-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
                                    aria-expanded={open}
                                >
                                    <RichText html={item.title} />
                                    <ChevronDownIcon
                                        className={`h-5 w-5 transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : ''}`}
                                    />
                                </DisclosureButton>
                                <DisclosurePanel className="p-5 animate-fadeIn">
                                    <RichText
                                        className="prose prose-li:py-1.5 text-base font-medium text-gray-700"
                                        html={item.description}
                                    />
                                </DisclosurePanel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
};

export default CourseAbout;
