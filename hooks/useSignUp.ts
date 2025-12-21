import { SignUpRequest } from "@/types/auth";
import { useState } from "react";
import type { User } from "@/types/user";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  const signUpFn = async (
    payload: SignUpRequest
  ): Promise<User | undefined> => {
    setLoading(true);

    try {
      const response = await fetch("/api/auth/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      return await response.json();
    } catch (error) {
      console.error("Kayıt Olunamadı useSignUp !" + error);
    } finally {
      setLoading(false);
    }
  };

  return {
    signUpFn,
    loading,
  };
};
