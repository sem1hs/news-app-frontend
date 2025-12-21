"use client";

import { CircleUser, LogOut } from "lucide-react";
import React, { useCallback, useState } from "react";
import AuthModal from "./AuthModal";
import { useUser } from "@/hooks/useUser";
import { useAuth } from "@/hooks/useAuth";

const AuthClient = () => {
  const { logoutFn } = useAuth();
  const { user } = useUser();
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const isAuthenticated = !!user;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (!isAuthenticated) setAuthOpen(true);
      else setMenuOpen((prev) => !prev);
    },
    [isAuthenticated]
  );

  const handleLogout = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      logoutFn();
      setMenuOpen(false);
    },
    [logoutFn]
  );

  const closeModal = useCallback(() => {
    setAuthOpen(false);
  }, []);

  return (
    <div className="relative">
      <button
        className="text-white flex items-center gap-2 bg-[#272C33] px-4 py-0.5 md:px-6 md:py-2.5 rounded-3xl cursor-pointer"
        onClick={handleClick}
      >
        <CircleUser className="w-[18px] md:w-[24px]" />
        <span className="hidden md:block">
          {!isAuthenticated ? " Oturum Aç / Kayıt Ol" : user?.username}
        </span>
      </button>

      {isAuthenticated && menuOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 rounded-xl bg-[#111517] shadow-lg border border-zinc-800 z-50">
          <button
            onClick={handleLogout}
            className="cursor-pointer flex w-full items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-[#272C33] rounded-xl"
          >
            <LogOut className="w-4 h-4" />
            Çıkış Yap
          </button>
        </div>
      )}

      {authOpen && !isAuthenticated && (
        <AuthModal open={authOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default AuthClient;
