import DOMPurify from 'isomorphic-dompurify'; // Optional for HTML sanitization
import React from 'react';

interface RichTextProps {
    html: string;
    className?: string;
    sanitize?: boolean;
}

const RichText: React.FC<RichTextProps> = ({ html, className = '', sanitize = false }) => {
    const cleanHtml = sanitize ? DOMPurify.sanitize(html) : html;

    return (
        <div
            className={`max-w-none ${className}`}
            dangerouslySetInnerHTML={{ __html: cleanHtml }}
        />
    );
};

export default RichText;
