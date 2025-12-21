"use client";

import { useState } from "react";
import AsideNav from "./AsideNav";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`
      relative h-screen bg-[#111517] text-white 
      shrink-0
      transition-[width] duration-300 ease-in-out
      will-change-[width]
      ${isOpen ? "w-64 min-w-64" : "w-16 min-w-16"}
    `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-6 bg-amber-500 text-black p-1 rounded-full shadow"
      >
        {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>

      <div className="py-8 px-4">
        {isOpen && (
          <h2 className="text-2xl font-semibold mb-6 whitespace-nowrap">
            Admin Panel
          </h2>
        )}

        <AsideNav isOpen={isOpen} />
      </div>
    </aside>
  );
};

export default Aside;
