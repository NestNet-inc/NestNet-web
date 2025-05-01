// components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "icon";
  children: React.ReactNode;
}

export function Button({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium rounded-md transition-colors";
  
  const variantStyles = {
    default: "bg-amber-800 text-white hover:bg-amber-900",
    outline: "border border-amber-800 text-amber-800 hover:bg-amber-50",
    ghost: "bg-transparent hover:bg-gray-100",
  };
  
  const sizeStyles = {
    default: "py-2 px-4",
    icon: "p-2",
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}