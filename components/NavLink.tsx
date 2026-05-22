import Link from "next/link";

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="
        text-sm tracking-widest uppercase font-light
        text-foreground/60 hover:text-foreground
        transition-colors duration-200
      "
        >
            {label}
        </Link>
    );
}

export default NavLink