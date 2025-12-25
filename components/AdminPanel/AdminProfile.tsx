"use client";

import { useState } from "react";
import { ChevronDown, Home } from "lucide-react";
import Link from "next/link";
import { useUser } from "@/hooks/useUser";

const AdminProfile = () => {
  const { user, loading } = useUser();
  const [open, setOpen] = useState(false);

  if (loading) {
    return (
      <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#151a1c]">
        <div className="w-9 h-9 rounded-full bg-white/10 animate-pulse" />
        <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
        cursor-pointer
          flex items-center gap-3
          w-full
          px-2 md:px-3 py-2
          rounded-lg
          bg-[#151a1c]
          hover:bg-[#1b2124]
          transition
        "
      >
        <div className="w-6 h-6 md:w-9 md:h-9 rounded-full bg-amber-500 text-black flex items-center justify-center md:font-semibold">
          {user.username.charAt(0).toUpperCase()}
        </div>

        <span className="flex-1 text-white text-xs md:text-sm font-medium text-left whitespace-nowrap">
          {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
        </span>

        <ChevronDown
          size={16}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="
            absolute left-0 mt-2 w-full
            rounded-lg
            bg-[#151a1c]
            border border-white/10
            shadow-lg
            overflow-hidden
            z-50
          "
        >
          <Link
            href="/"
            className="
              flex items-center gap-2
              px-2 py-2
              text-sm
              text-white
              hover:bg-[#1b2124]
              transition
            "
          >
            <Home size={16} />
            Anasayfaya Git
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
