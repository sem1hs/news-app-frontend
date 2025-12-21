import { ErrorMessage, Field } from "formik";

type FormInputType = {
  name: string;
  placeholder: string;
};

type Props = {
  formInput: FormInputType;
};

const FormInput = ({ formInput }: Props) => {
  return (
    <div className="w-full">
      <Field
        name={formInput.name}
        placeholder={formInput.placeholder}
        className="w-full rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white"
      />
      <ErrorMessage
        name={formInput.name}
        component="div"
        className="text-red-400 text-xs mt-1"
      />
    </div>
  );
};

export default FormInput;
