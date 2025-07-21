"use client";

import React from "react";

interface InputProps {
  type?: string;
  name?: string;
  value?: string;
  label?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextArea?: boolean; // Toggle between input and textarea
  textAreaPlaceholder?: string; // Custom placeholder for textarea
}

const InputField: React.FC<InputProps> = ({
  type,
  name,
  value,
  label,
  onChange,
  isTextArea = false,
  textAreaPlaceholder = "Enter your message",
}) => {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={name}
        className="text-display-2 text-neutral-8 font-semibold mb-2"
      >
        {label}
      </label>

      {isTextArea ? (
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={textAreaPlaceholder}
          className="py-3 px-4 placeholder:text-display-2 placeholder:text-neutral-6 border border-neutral-8 outline-none w-full h-32 resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={`Enter ${label}`}
          className="py-3 px-4 placeholder:text-display-2 placeholder:text-neutral-6 border border-neutral-8 outline-none w-full"
        />
      )}
    </div>
  );
};

export default InputField;
