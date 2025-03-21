import Link from 'next/link';

export default function Header(){
    const linkStyling = "p-1 m-2 text-x1 hover:underline";
    return (
        <header>
            <h2 className="text-4xl font-semibold p-4">Next.js Introduction</h2>
            <nav className="p-2 m-4">
                <Link href="/" className={linkStyling}>Home</Link>
                <Link href="/about" className={linkStyling}>About</Link>
            </nav>
        </header>
    )
}