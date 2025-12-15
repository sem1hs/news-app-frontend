"use client";
import { Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import { useState } from "react";

const MobileHeader = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen((open) => !open);
  };

  return (
    <header className="flex md:hidden px-4 py-4 bg-[#111517]">
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`px-4 py-4 fixed top-0 left-0 h-full w-[280px] bg-[#111517] z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          onClick={handleClick}
          className="flex items-center cursor-pointer"
        >
          <X className="text-white" />
        </button>
      </div>

      <button
        className="flex items-center cursor-pointer"
        onClick={handleClick}
      >
        <Menu className="text-white" />
      </button>
      <h1 className="text-white text-xl font-bold ml-4">SemihScore</h1>
      <SearchBar />
    </header>
  );
};

export default MobileHeader;
