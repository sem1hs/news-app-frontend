import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { X } from "lucide-react";
import LoginForm from "./LoginForm";
import { useState } from "react";
import SignUpForm from "./SignUpForm";
import AuthButton from "./AuthButton";
import { AuthLoginButton, AuthSignUpButton } from "@/constants/AUTH_BUTTON";

type Props = {
  open: boolean;
  onClose: () => void;
};

export type AuthView = "login" | "register";

const AuthModal = ({ open, onClose }: Props) => {
  const [view, setView] = useState<AuthView>("login");
  useLockBodyScroll(open);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-xl bg-[#111517] p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-xl font-bold">
            {view === "login" ? "Oturum Aç" : "Kayıt Ol"}
          </h2>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition cursor-pointer"
          >
            <X />
          </button>
        </div>
        {view === "login" ? (
          <LoginForm closeModal={onClose} />
        ) : (
          <SignUpForm closeModal={onClose} />
        )}

        {view === "login" ? (
          <AuthButton authButtonType={AuthSignUpButton} setView={setView} />
        ) : (
          <AuthButton authButtonType={AuthLoginButton} setView={setView} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
