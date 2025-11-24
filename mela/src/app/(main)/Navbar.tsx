// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber ve lillahi'l-hamd

"use client";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import UserButton from "@/components/UserButton";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Menü dışına tıklanınca kapat
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div
        ref={navRef}
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3"
      >
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700 tracking-tight">
          Mimar Ofisi
        </Link>

        {/* Mobil Menü Butonu */}
        <button
          className="lg:hidden p-2 rounded text-green-700"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menüyü Aç/Kapat"
        >
          <FaBars size={22} />
        </button>

        {/* Menü Öğeleri */}
        <nav
          className={`
            flex-col lg:flex-row flex items-center gap-3 lg:gap-5
            fixed lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent z-20
            transition-all duration-200
            ${menuOpen ? "flex" : "hidden lg:flex"}
          `}
        >
          <Link
            href="/mmavahi"
            className="text-sm font-medium text-gray-700 hover:text-green-700 w-full lg:w-auto px-5 py-2 lg:p-0 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Projeler
          </Link>
          <Link
            href="/mmkargeh"
            className="text-sm font-medium text-gray-700 hover:text-green-700 w-full lg:w-auto px-5 py-2 lg:p-0 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Hizmetler
          </Link>
          <Link
            href="/mmwesayit"
            className="text-sm font-medium text-gray-700 hover:text-green-700 w-full lg:w-auto px-5 py-2 lg:p-0 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Referanslar
          </Link>
          <Link
            href="/malper"
            className="text-sm font-medium text-gray-700 hover:text-green-700 w-full lg:w-auto px-5 py-2 lg:p-0 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Hakkımızda
          </Link>
          <Link
            href="/malper"
            className="text-sm font-medium text-gray-700 hover:text-green-700 w-full lg:w-auto px-5 py-2 lg:p-0 text-center"
            onClick={() => setMenuOpen(false)}
          >
            İletişim
          </Link>
        </nav>

        {/* Kullanıcı Butonu */}
        <div className="sm:ms-auto">
          <UserButton />
        </div>
      </div>
    </header>
  );
}