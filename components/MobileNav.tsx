import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet";

const navLinks = [
  { label: "Contact Us", href: "#" },
  { label: "About Us", href: "/about" },
];

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="ghost" />}
      >
        <Menu className="size-5 stroke-1" />
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <SheetClose key={link.label} render={<Link href={link.href} />}>
              <span className="block py-3 text-lg font-medium text-foreground border-b border-border">
                {link.label}
              </span>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
