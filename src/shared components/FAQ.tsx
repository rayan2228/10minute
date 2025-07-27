"use client"
import { SectionData } from "@/type"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { ChevronDownIcon } from "lucide-react"
import RichText from "./RichText"
import Title from "./Title"

const FAQ = ({ content }: SectionData) => {
    return (
        <div className={`order-${content.order_idx}`}>
            <Title title={content.name} />

            <div className="mt-4 rounded-lg border border-gray-200 divide-y divide-gray-200">
                {content.values.map((item, index) => (
                    <Disclosure key={item.id} defaultOpen={index == 0}>
                        {({ open }) => (
                            <>
                                <DisclosureButton className="flex justify-between items-center w-full p-5 text-left text-lg font-medium text-gray-900 hover:bg-gray-50 transition cursor-pointer">
                                    <RichText html={item.question} />
                                    <ChevronDownIcon
                                        className={`h-5 w-5 transform transition-transform ${open ? 'rotate-180' : ''
                                            }`}
                                    />
                                </DisclosureButton>
                                <DisclosurePanel className="p-5">
                                    <RichText className=' prose text-base !font-medium' html={item.answer} />
                                </DisclosurePanel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    )
}

export default FAQ