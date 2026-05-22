import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import MobileNav from "./MobileNav";

function LOGO() {
    return (
        <Link href={'/'}>
            <div className="relative block w-28 h-12">
                <Image src={'/logo3.png'} alt="Jilani logo" fill className="object-fill" />
            </div>
        </Link>
    )
}


function LI({ children }: { children: string }) {
    return (
        <li className="text-lg font-light">{children}</li>
    )
}

function Nav() {
    const links = [
        { label: "Gems", url: "/" },
        { label: "Minerals", url: "/minerals" },
        { label: "Others", url: "#" },
        { label: "Contact Us", url: "#" },
        { label: "About Us", url: "#" },
    ];

    return (
        <nav className="mr-20">
            <ul className="flex gap-3">
                {links.flatMap((item, i) => [
                    <Link key={i} href={item.url}>
                        <LI>{item.label}</LI>
                    </Link>,
                    i < links.length - 1 && (
                        <p key={`sep-${i}`} className="text-lg">-</p>
                    ),
                ])}
            </ul>
        </nav>
    );
}

function MobileMode() {
    return (
        <div className="max-w-360 mx-auto py-3 md:hidden block bg-background/20 backdrop-blur-md">
            <div className="grid grid-cols-3 items-center">
                <div></div> {/* empty spacer for left side */}
                <div className="relative w-18 justify-self-center mr-8">
                    <LOGO />
                </div>
                <div className="justify-self-end">
                    <MobileNav />
                </div>
            </div>
        </div>
    )
}

function Header() {
    return (
        <header className="border-border md:hidden sticky top-0 z-50">
            <div className="bg-foreground h-8 flex items-center justify-center">
                <p className="text-background text-sm font-extralight">Jilani International</p>
            </div>
            {/* <div className="max-w-360 mx-auto py-3 md:px-3 xl:px-0 hidden md:block">
                <div className="flex justify-between items-center">
                    <LOGO />
                    <Nav />
                </div>
            </div> */}
            <MobileMode />
        </header>
    );
}

export default Header;