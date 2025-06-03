// Bismillahirahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain

import Link from "next/link";
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
Müşterisi Burada
        </Link>

        {/* Search Field */}
        <SearchField />

        {/* Dropdown Menus */}
      

        {/* User Button */}
        <UserButton className="sm:ms-auto" />
      </div>
    </header>
  );
}