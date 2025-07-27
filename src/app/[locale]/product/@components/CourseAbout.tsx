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
                    <Disclosure key={item.id} defaultOpen={index == 0}>
                        {({ open }) => (
                            <>
                                <DisclosureButton className="flex justify-between items-center w-full p-5 text-left text-lg font-medium text-gray-900 hover:bg-gray-50 transition cursor-pointer">
                                    <RichText html={item.title} />
                                    <ChevronDownIcon
                                        className={`h-5 w-5 transform transition-transform ${open ? 'rotate-180' : ''
                                            }`}
                                    />
                                </DisclosureButton>
                                <DisclosurePanel className="p-5">
                                    <RichText className='prose prose-li:py-2  text-base !font-medium' html={item.description} />
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
