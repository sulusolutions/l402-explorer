import React from "react";

type InputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label = "",
  placeholder = "",
  type = "text",
  value,
  onChange,
}: InputProps) => {
  return (
    <>
      {label && (
        <label className="block text-md font-medium mb-2">{label}</label>
      )}
      <input
        className="flex h-12 w-full rounded-md border border-gray-300 px-3 py-2 text-md text-gray-900 focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 placeholder-gray-400"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};

export default Input;
