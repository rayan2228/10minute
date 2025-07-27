import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from '../LanguageSwitcher';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <Link href="/">
                    <Image
                        src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                        alt="10 Minute School Logo"
                        width={160}
                        height={30}
                        priority
                        className="h-8 w-auto"
                    />
                </Link>

                <LanguageSwitcher />
            </div>
        </header>
    );
};

export default Header;
