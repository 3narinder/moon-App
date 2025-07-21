import React from "react";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={label}
        checked={isChecked}
        onChange={onChange}
        className="w-5 h-5 border border-warm-black rounded-none cursor-pointer bg-white checked:bg-warm-black checked:border-warm-black accent-warm-black"
      />
      <label
        htmlFor={label}
        className="text-display-2 text-warm-black cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
