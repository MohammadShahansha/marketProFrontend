import { Form, Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label: string;
};

const MPInput = ({ type, name, label }: TInputProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Input {...field} type={type} id={name} />
          {error && <small className="text-red-600"> {error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default MPInput;
