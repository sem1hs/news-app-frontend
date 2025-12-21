import { LoginRequest, SignUpRequest } from "@/types/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, logout, signUp } from "@/api/auth/auth";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: async ({
      user,
      resetForm,
    }: {
      user: LoginRequest;
      resetForm?: () => void;
    }) => await login(user),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      variables.resetForm?.();
    },
  });

  const signUpMutation = useMutation({
    mutationFn: async ({
      user,
      resetForm,
    }: {
      user: SignUpRequest;
      resetForm?: () => void;
    }) => await signUp(user),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      variables.resetForm?.();
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => await logout(),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["user"], null);
      queryClient.cancelQueries({ queryKey: ["user"] });
    },
  });

  const loginFn = async (payload: { user: SignUpRequest }) => {
    const data = await loginMutation.mutateAsync(payload);
    return data;
  };

  const signUpFn = async (payload: { user: LoginRequest }) => {
    const data = await signUpMutation.mutateAsync(payload);
    return data;
  };

  return {
    loginFn,
    signUpFn,
    logoutFn: logoutMutation.mutate,
    user: loginMutation.data,
  };
};
