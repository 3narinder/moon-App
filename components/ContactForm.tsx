"use client";

import React, { useState } from "react";
import InputField from "@/components/custom/InputField";
import Button from "./custom/Button";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Server Response:", formData);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="lg:w-2/3  w-full lg:px-32 px-5 lg:my-12 my-10"
    >
      <div className="flex lg:flex-row flex-col items-center justify-between gap-4 w-full">
        <InputField
          type="text"
          label="Name"
          value={formData.name}
          name="name"
          onChange={handleInputChange}
        />

        <InputField
          type="email"
          label="Email"
          value={formData.email}
          name="email"
          onChange={handleInputChange}
        />
      </div>

      <div className="flex lg:flex-row flex-col items-center justify-between gap-4 w-full my-4">
        <InputField
          type="number"
          label="Phone"
          value={formData.phone}
          name="phone"
          onChange={handleInputChange}
        />

        <InputField
          type="text"
          label="Company"
          value={formData.company}
          name="company"
          onChange={handleInputChange}
        />
      </div>

      <InputField
        type="text"
        isTextArea
        label="Message"
        value={formData.message}
        textAreaPlaceholder="Type your message here..."
        name="message"
        onChange={handleInputChange}
      />

      <div className="mt-8">
        <Button
          text="SEND MESSAGE"
          icon={<FaArrowRight className="text-neutral-2 text-xs" />}
        />
      </div>
    </form>
  );
};

export default ContactForm;
