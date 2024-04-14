import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md text-sm font-medium focus:outline-none disabled:cursor-not-allowed h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
    >
      {children}
    </button>
  );
};

export default Button;
