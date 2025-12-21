import React from "react";

const FormRow = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full flex gap-4">{children}</div>;
};

export default FormRow;
