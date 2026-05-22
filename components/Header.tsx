import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import MobileNav from "./MobileNav";

function LI({ children }: { children: string }) {
    return (
        <li className="text-lg font-light">{children}</li>
    )
}

function Nav() {

    return (
        <nav className="mr-20">
            <ul className="flex gap-3">
                <Link href={'#'}>
                    <LI>Collection</LI>
                </Link>
                <p className="text-lg">-</p>
                <Link href={'#'}>
                    <LI>Store</LI>
                </Link>
                <p className="text-lg">-</p>
                <Link href={'#'}>
                    <LI>Contact Us</LI>
                </Link>
                <p className="text-lg">-</p>
                <Link href={'#'}>
                    <LI>About Us</LI>
                </Link>
            </ul>
        </nav>
    )
}

function MobileMode() {
    return (
        <div className="max-w-360 mx-auto py-3 md:hidden block">
            <div className="flex justify-between items-center">
                <MobileNav />
                <div className="relative block w-18 h-8">
                    <Image src={'/logo2.png'} alt="Jilani logo" fill className="object-fill" />
                </div>
                <Button variant='ghost'>
                    <Search className="size-5 stroke-1" />
                </Button>
            </div>
        </div>
    )
}

function Header() {
    return (
        <header className="border-border border-b">
            <div className="bg-foreground h-6 flex items-center justify-center">
                <p className="text-background text-[8px] font-extralight">100% Natural & Untreated Stones • Request a private consultation</p>
            </div>
            <div className="max-w-360 mx-auto py-3 md:px-3 xl:px-0 hidden md:block">
                <div className="flex justify-between items-center">
                    <div className="relative block w-28 h-12">
                        <Image src={'/logo2.png'} alt="Jilani logo" fill className="object-fill" />
                    </div>
                    <Nav />
                    <Button variant='ghost'>
                        <Search className="size-5 stroke-1" />
                    </Button>
                </div>
            </div>
            <MobileMode />
        </header>
    );
}

export default Header;