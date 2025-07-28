import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 mt-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Logo & About */}
                <div className="col-span-1">
                    <Link href="/">
                        <Image
                            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                            alt="Logo"
                            width={160}
                            height={30}
                        />
                    </Link>
                    <p className="mt-4 text-sm">
                        Empowering learners through quality education and innovative technology.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-base font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-two">Home</Link></li>
                        <li><Link href="/about" className="hover:text-two">About</Link></li>
                        <li><Link href="/courses" className="hover:text-two">Courses</Link></li>
                        <li><Link href="/contact" className="hover:text-two">Contact</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-base font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/faq" className="hover:text-two">FAQ</Link></li>
                        <li><Link href="/blog" className="hover:text-two">Blog</Link></li>
                        <li><Link href="/terms" className="hover:text-two">Terms & Conditions</Link></li>
                        <li><Link href="/privacy" className="hover:text-two">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-base font-semibold mb-3">Follow Us</h3>
                    <div className="flex items-center space-x-4 mt-2">
                        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <Facebook className="w-5 h-5 hover:text-blue-600" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                            <Twitter className="w-5 h-5 hover:text-sky-500" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                            <Instagram className="w-5 h-5 hover:text-pink-500" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5 hover:text-blue-700" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 text-center py-4 text-sm bg-white">
                © {new Date().getFullYear()} 10 Minute School. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
