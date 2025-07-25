'use client'
import { SUPPORTED_LANGUAGES } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    // Extract current language from pathname (e.g., /en/product/ielts-course -> 'en')
    const pathSegments = pathname.split('/').filter(Boolean);
    const currentLang: string = SUPPORTED_LANGUAGES.includes(pathSegments[0]) ? pathSegments[0] : 'bn';

    // Get the path without language prefix
    const pathWithoutLang = pathSegments.length > 0 && SUPPORTED_LANGUAGES.includes(pathSegments[0])
        ? '/' + pathSegments.slice(1).join('/')
        : pathname;

    const handleLanguageChange = (lang: string): void => {
        const newPath = `/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
        router.push(newPath);
    };

    return (
        <div className="flex space-x-2">
            {SUPPORTED_LANGUAGES.map((lang: string) => (
                <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-3 py-1 rounded-md transition-colors ${currentLang === lang
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
}