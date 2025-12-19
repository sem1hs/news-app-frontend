import { LoginRequest } from "@/types/auth";
import { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginFn = async (payload: LoginRequest) => {
    setLoading(true);

    try {
      const response = await fetch("api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      return await response.json();
    } catch (err: any) {
      setError(err.response?.data?.message || "Giriş başarısız");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loginFn,
    loading,
    error,
  };
};
