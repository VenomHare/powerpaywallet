"use client";
import "./globals.css";
import { ReactNode } from "react";

const ButtonVariants = {
  default: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 ",
  ghost: "text-slate-700 bg-slate-400 focus:ring-gray-300 "
}

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: keyof typeof ButtonVariants;
  className?: string
}
export const Button = ({ onClick, children, variant = "default", className = ""}: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className={ButtonVariants[variant] + " cursor-pointer focus:outline-none focus:ring-4 font-medium rounded-lg text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 " + className}>
      {children}
    </button>
  );
};
