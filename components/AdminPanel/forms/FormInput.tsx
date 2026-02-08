import { ErrorMessage, Field } from "formik";

type FormInputType = {
  name: string;
  placeholder?: string;
  type?: string;
  step?: number;
  min?: string | number;
  max?: string | number;
};

type Props = {
  formInput: FormInputType;
};

const FormInput = ({ formInput }: Props) => {
  return (
    <div className="w-full">
      <Field
        name={formInput.name}
        type={formInput.type ?? "text"}
        placeholder={formInput.placeholder}
        step={formInput.step}
        min={formInput.min}
        max={formInput.max}
        className="w-full rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white"
      />

      <ErrorMessage
        name={formInput.name}
        component="div"
        className="mt-1 text-xs text-red-400"
      />
    </div>
  );
};


export default FormInput;
