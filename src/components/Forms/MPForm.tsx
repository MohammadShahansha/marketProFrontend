import React from "react";
import {
  useForm,
  FormProvider,
  //   useFormContext,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};
const MPForm = ({ children, onSubmit }: TFormProps) => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default MPForm;
