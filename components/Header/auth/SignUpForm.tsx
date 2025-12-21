import { useAuth } from "@/context/authContext";
import { useSignUp } from "@/hooks/useSignUp";
import { signUpInitialValues, signUpSchema } from "@/schemas/signUpSchema";
import { SignUpRequest } from "@/types/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";

type Props = {
  closeModal: () => void;
};

const SignUpForm = ({ closeModal }: Props) => {
  const router = useRouter();
  const { refetch } = useAuth();
  const { signUpFn } = useSignUp();

  const handleSubmit = async (values: SignUpRequest) => {
    const user = await signUpFn(values);

    if (user) {
      await refetch();
      closeModal();
      if (user.role.some((role) => role === "ROLE_ADMIN")) {
        router.push("/admin");
      }
    }
  };

  return (
    <Formik
      initialValues={signUpInitialValues}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <div>
            <Field
              name="username"
              type="text"
              placeholder="Kullanıcı Adı"
              className="w-full rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-400 text-xs mt-1"
            />
          </div>

          <div>
            <Field
              name="password"
              type="password"
              placeholder="Şifre"
              className="w-full rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-400 text-xs mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer mt-2 rounded-lg bg-amber-500 py-2.5 font-semibold text-[#1a1f26] hover:bg-amber-400 transition disabled:opacity-60"
          >
            {isSubmitting ? "Kayıt Olunuyor..." : "Kayıt Ol"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
