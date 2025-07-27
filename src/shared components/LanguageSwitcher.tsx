'use client';

import { SUPPORTED_LANGUAGES } from '@/constants';
import { GlobeIcon } from 'lucide-react'; // Optional: use any icon library
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const pathSegments = pathname.split('/').filter(Boolean);
    const currentLang: string = SUPPORTED_LANGUAGES.includes(pathSegments[0]) ? pathSegments[0] : 'bn';

    const pathWithoutLang =
        pathSegments.length > 0 && SUPPORTED_LANGUAGES.includes(pathSegments[0])
            ? '/' + pathSegments.slice(1).join('/')
            : pathname;

    const handleLanguageChange = (lang: string): void => {
        const newPath = `/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
        router.push(newPath);
    };

    return (
        <div className="flex items-center space-x-3 rounded-full bg-gray-100 px-3 py-1 shadow-inner">
            <GlobeIcon className="w-4 h-4 text-gray-500" />

            {SUPPORTED_LANGUAGES.map((lang) => {
                const isActive = currentLang === lang;
                return (
                    <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                                ? 'bg-two text-white shadow-md'
                                : 'text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {lang.toUpperCase()}
                    </button>
                );
            })}
        </div>
    );
}
