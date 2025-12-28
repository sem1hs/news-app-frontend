import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { X } from "lucide-react";
import LoginForm from "./LoginForm";
import { useState } from "react";
import SignUpForm from "./SignUpForm";
import AuthButton from "./AuthButton";
import { AuthLoginButton, AuthSignUpButton } from "@/constants/AUTH_BUTTON";
import ModalPortal from "./ModalPortal";

type Props = {
  open: boolean;
  onClose: () => void;
};

export type AuthView = "login" | "register";

const AuthModal = ({ open, onClose }: Props) => {
  const [view, setView] = useState<AuthView>("login");
  useLockBodyScroll(open);

  if (!open) return null;

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        <div className="relative z-10 w-full max-w-md rounded-xl bg-[#111517] p-6 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              {view === "login" ? "Oturum Aç" : "Kayıt Ol"}
            </h2>

            <button
              onClick={onClose}
              className="cursor-pointer text-zinc-400 transition hover:text-white"
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
    </ModalPortal>
  );
};

export default AuthModal;
