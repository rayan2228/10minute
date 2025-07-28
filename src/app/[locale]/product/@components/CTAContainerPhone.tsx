'use client';

import { CourseData } from "@/type";
import { useEffect, useState } from 'react';
import EnrollButton from "./EnrollButton";
import Price from "./Price";

const CTAContainerPhone = ({ content }: { content: CourseData }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 1000);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`p-3 flex flex-col gap-3 transition-all duration-300 md:hidden bg-white border-t-2 border-gray-200   ${isSticky && "fixed bottom-0 left-0 right-0 "
                }`}
        >
            <Price />
            <EnrollButton content={content.cta_text} />
        </div>
    );
};

export default CTAContainerPhone;
