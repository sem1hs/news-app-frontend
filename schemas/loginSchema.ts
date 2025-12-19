import { LoginRequest } from "@/types/auth";
import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().required("Kullanıcı Adı zorunludur"),
  password: Yup.string().required("Şifre zorunludur"),
});

export const loginInitialValues: LoginRequest = {
  username: "",
  password: "",
};
