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

  return {
    loginFn: loginMutation.mutateAsync,
    logoutFn: logoutMutation.mutate,
    signUpFn: signUpMutation.mutateAsync,
    user: loginMutation.data,
  };
};
