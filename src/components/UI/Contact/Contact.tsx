"use client";
import MPForm from "@/components/Forms/MPForm";
import MPInput from "@/components/Forms/MPInput";
import React from "react";

const Contact = () => {
  const onSubmit = () => {};
  return (
    <div>
      <MPForm onSubmit={onSubmit}>
        <MPInput type="text" name="fullName" label="Full Name" />
        <MPInput type="text" name="email" label="Email" />
        <MPInput type="text" name="PhoneNumber" label="Phone Number" />
        <MPInput type="text" name="subject" label="Subject" />
        <MPInput type="textArea" name="message" label="Message" />
      </MPForm>
    </div>
  );
};

export default Contact;
