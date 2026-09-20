import React from "react";

const Button = ({
  children,
  size = "md",
  variant = "primary",
  rounded = "md",
  disabled = false,
  className = "",
  ...props
}) => {

  // Sizes
  const sizes = {
    sm: "px-8 py-3 text-xs",
    md: "px-10 py-6 text-sm",
    lg: "px-12 py-8 text-md",
    xl: "px-16 py-12 text-md",
  };

  // Variants
  const variants = {
    primary:
      "bg-[#242F42] text-white hover:bg-[#3770A8]",

      
    secondary:
      "bg-[#3770A8] text-white hover:bg-[#2E3C54]",

    outline:
      "border border-[#3770A8] text-white hover:bg-[#3770A8] hover:text-white",
  };

  // Rounded
  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <button
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        font-medium
        transition-all
        duration-300
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        cursor-pointer

        ${sizes[size]}
        ${variants[variant]}
        ${roundedStyles[rounded]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};



export default Button;

