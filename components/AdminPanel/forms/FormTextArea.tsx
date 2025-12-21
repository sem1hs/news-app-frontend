import { ErrorMessage, Field } from "formik";

type FormTextAreaType = {
  name: string;
  placeholder: string;
};

type Props = {
  formTextArea: FormTextAreaType;
};

const FormTextArea = ({ formTextArea }: Props) => {
  return (
    <div className="w-full">
      <Field
        as="textarea"
        name={formTextArea.name}
        placeholder={formTextArea.placeholder}
        className="w-full min-h-[80px] rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white"
      />
      <ErrorMessage
        name={formTextArea.name}
        component="div"
        className="text-red-400 text-xs mt-1"
      />
    </div>
  );
};

export default FormTextArea;
