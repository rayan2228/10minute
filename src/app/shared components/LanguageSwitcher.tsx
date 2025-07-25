// components/LanguageSwitcher.tsx
import { SUPPORTED_LANGUAGES } from '@/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
    const router = useRouter();
    const { pathname, query } = router;

    return (
        <div className="flex space-x-2">
            {SUPPORTED_LANGUAGES.map((lang) => (
                <Link
                    key={lang}
                    href={{ pathname, query: { ...query, lang } }}
                    locale={false}
                    className={`px-3 py-1 rounded-md ${query.lang === lang
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    {lang.toUpperCase()}
                </Link>
            ))}
        </div>
    );
}