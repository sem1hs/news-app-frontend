import type { AuthView } from "@/components/Header/auth/AuthModal";

export type AuthButtonType = {
  type: AuthView;
  label: string;
  buttonText: string;
};

export const AuthSignUpButton: AuthButtonType = {
  type: "register",
  label: "Hesabınız yok mu?",
  buttonText: "Kayıt olun",
};

export const AuthLoginButton: AuthButtonType = {
  type: "login",
  label: "Hesabınız varsa",
  buttonText: "Oturum açın",
};
