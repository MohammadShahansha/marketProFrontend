"use client";
import { Form, Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label: string;
};

const MPInput = ({ type, name, label }: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Form.Item>
          <div className=" flex flex-col">
            <label
              htmlFor={name}
              className="text-lg font-exo font-[500] text-black"
            >
              {label}
            </label>
            {type === "textArea" ? (
              <Input.TextArea
                {...field}
                id={name}
                className="w-full min-h-[100px] border-1 border-[#ccc] focus:border-bgPrimaryColor hover:border-bgPrimaryColor outline-none"
              />
            ) : (
              <Input
                {...field}
                type={type}
                id={name}
                className="w-full md:w-[400px] h-[50px] border-1 border-[#ccc] focus:border-bgPrimaryColor hover:border-bgPrimaryColor outline-none"
              />
            )}
            {error && <small className="text-red-600"> {error.message}</small>}
          </div>
        </Form.Item>
      )}
    />
  );
};

export default MPInput;
