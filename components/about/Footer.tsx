import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-8">
      <div className="container mx-auto px-4 text-center text-slate-600">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Jilani Gems & Minerals by Jilani International. All rights reserved.
        </p>
        <p className="text-sm">
          <Link href="/" className="hover:underline">Home</Link> •{" "}
          <Link href="/minerals" className="hover:underline">Minerals</Link> •{" "}
          <a href="https://wa.me/9234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact via WhatsApp</a>
        </p>
      </div>
    </footer>
  );
}