"use client";

import { useEffect, useState } from "react";
import AuthClient from "./auth/AuthClient";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`hidden md:flex w-full items-center justify-between px-6 py-6 transition-all duration-300 ${
        isSticky
          ? "sticky top-0 z-50 bg-[#111517]/95 backdrop-blur supports-backdrop-filter:bg-[#111517]/90 border-b border-white/5"
          : "bg-[#111517]"
      }`}
    >
      <h1 className="text-white text-2xl font-bold">SemihScore</h1>

      <Navbar />

      <div className="flex items-center gap-12">
        <AuthClient />
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
