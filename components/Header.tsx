import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

function LOGO() {
    return (
        <Link href={'/'}>
            <div className="relative block w-28 h-12">
                <Image src={'/logo3.png'} alt="Jilani logo" fill className="object-fill" />
            </div>
        </Link>
    )
}

function Header() {

    const leftLinks = [
        { name: "Gems", href: "/" },
        { name: "Minerals", href: "/minerals" },
        { name: "Others", href: "#" }
    ];

    return (
        <header className="md:hidden">
            <div className="bg-foreground h-8 flex items-center justify-center">
                <p className="text-background text-sm font-extralight">Jilani International</p>
            </div>
            <div className="pt-3 pb-2 flex flex-col items-center">
                <LOGO />
            </div>

            {/* 2. Nav is pulled out so it shares a parent with your main page content. 
             Added `md:hidden` so it hides on desktop like the header does. */}
            <nav className="w-full bg-background/20 backdrop-blur-md py-2 md:hidden shadow-sm">
                <ul className="flex justify-center gap-3">
                    {leftLinks.map((label) => (
                        <NavLink key={label.name} href={label.href} label={label.name} />
                    ))}
                </ul>
            </nav>
        </header>

    );
}

export default Header;