import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav"; // 1. Imported MobileNav

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
        { name: "Others", href: "/other" }
    ];

    return (
        <header className="md:hidden">
            <div className="bg-foreground h-8 flex items-center justify-center">
                <p className="text-background text-sm font-extralight">Jilani International</p>
            </div>
            <div className="pt-3 pb-2 flex flex-col items-center">
                <LOGO />
            </div>

            {/* Nav */}
            <nav className="w-full bg-background/20 backdrop-blur-md py-2 md:hidden shadow-sm">
                {/* Added items-center to keep the links and the icon vertically aligned */}
                <ul className="flex items-center justify-center gap-3 relative">
                    {leftLinks.map((label) => (
                        <NavLink key={label.name} href={label.href} label={label.name} />
                    ))}
                    
                    {/* 2. Added the MobileNav component here */}
                    <li className="absolute left-0">
                        <MobileNav />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;