// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbil Alamin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber ve Lillahi'l-hamd
// HasbunAllahu ve ni'mel vekil
"use client";

import { Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import ChatChannel from "./ChatChannel";
import ChatSidebar from "./ChatSidebar";

export default function Chat() {
  const { resolvedTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={
        isMobile
          ? "flex flex-col w-full h-screen relative bg-background"
          : "flex flex-row w-full h-screen bg-background"
      }
    >
      {/* Mobilde sidebar açma butonu */}
      {isMobile && !sidebarOpen && (
        <button
          className="m-2 rounded bg-primary px-4 py-2 text-white fixed top-2 left-2 z-30 shadow-lg"
          onClick={() => setSidebarOpen(true)}
        >
          Kanallar
        </button>
      )}
      {/* Sidebar */}
      <div
        className={
          isMobile
            ? `fixed top-0 left-0 h-full w-4/5 max-w-xs z-20 transition-transform duration-300 bg-card shadow-lg ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
            : "w-80 min-w-[250px] h-full border-r bg-card"
        }
      >
        <ChatSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      {/* Mobilde sidebar açıksa, içerik karartılsın */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Chat içeriği */}
      <div
        className={
          isMobile
            ? `flex-1 w-full h-full ${sidebarOpen ? 'hidden' : 'block'}`
            : "flex-1 w-full h-full"
        }
      >
        <ChatChannel open={!isMobile || !sidebarOpen} openSidebar={() => setSidebarOpen(true)} />
      </div>
    </div>
  );
}