'use client';

import { CourseData } from "@/type";
import { useEffect, useState } from 'react';
import CourseChecklist from "./CourseChecklist";
import EnrollButton from "./EnrollButton";
import Price from "./Price";

const CTAContainer = ({ content }: { content: CourseData }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`p-3 flex flex-col gap-3 transition-all duration-300  ${isSticky ? 'md:fixed md:top-40 lg:top-35 md:border-2 md:border-gray-200 md:bg-white' : ''
                }`}
        >
            <Price />
            <EnrollButton content={content.cta_text} />
            <CourseChecklist content={content.checklist} />
        </div>
    );
};

export default CTAContainer;
