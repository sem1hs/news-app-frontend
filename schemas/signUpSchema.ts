import { SignUpRequest } from "@/types/auth";
import * as Yup from "yup";

export const signUpSchema = Yup.object({
  username: Yup.string().required("Kullanıcı Adı zorunludur"),
  password: Yup.string().required("Şifre zorunludur"),
});

export const signUpInitialValues: SignUpRequest = {
  username: "",
  password: "",
};
