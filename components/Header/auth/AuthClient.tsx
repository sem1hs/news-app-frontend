"use client";

import { CircleUser } from "lucide-react";
import React, { useCallback, useState } from "react";
import AuthModal from "./AuthModal";

const AuthClient = () => {
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAuthOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setAuthOpen(false);
  }, []);

  return (
    <>
      <button
        className="text-white flex items-center gap-2 bg-[#272C33] px-6 py-2.5 rounded-3xl cursor-pointer"
        onClick={handleClick}
      >
        <CircleUser />
        <span>Oturum Aç / Kayıt Ol</span>
      </button>

      {authOpen && <AuthModal open={authOpen} onClose={closeModal} />}
    </>
  );
};

export default AuthClient;
