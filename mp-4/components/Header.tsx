import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-sky-600">Icon Finder App</h2>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-sky-600 transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-gray-700 hover:text-sky-600 transition-colors"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}