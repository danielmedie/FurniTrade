import Link from "next/link";
import { NavLinks } from "@/src/components/NavLinks";

export function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="hidden lg:flex lg:gap-10">
          <NavLinks />
        </div>
      </nav>
    </header>
  );
}
