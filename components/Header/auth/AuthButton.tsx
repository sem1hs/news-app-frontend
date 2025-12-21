import type { AuthButtonType } from "@/constants/AUTH_BUTTON";
import { AuthView } from "./AuthModal";

type Props = {
  authButtonType: AuthButtonType;
  setView: (value: AuthView) => void;
};

const AuthButton = ({ authButtonType, setView }: Props) => {
  return (
    <div className="text-amber-600 text-sm mt-3 flex gap-1">
      <span>{authButtonType.label}</span>
      <button
        onClick={() => setView(authButtonType.type)}
        className="hover:underline"
      >
        {authButtonType.buttonText}
      </button>
    </div>
  );
};

export default AuthButton;
