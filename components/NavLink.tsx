import Link from "next/link";

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="
        text-sm tracking-widest uppercase font-light
        text-primary hover:text-primary/70
        transition-colors duration-200
      "
        >
            {label}
        </Link>
    );
}

export default NavLink