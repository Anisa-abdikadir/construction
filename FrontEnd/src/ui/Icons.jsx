import React from "react";

const Icons = ({
  children,
  size = "xl",
  variant = "primary",
  rounded = "lg",
  disabled = false,
  className = "",
  ...props
}) => {
  // Sizes
  const sizes = {
    // sm: "px-90 py-40",
    md: "px-4 py-3",
    // lg: "px-1 py-4",
    // xl: "px-6 py-6",
  };

  // Variants
  const variants = {
    primary:
      "bg-[#FFFFFF]/20 text-white  hover:bg-[#3770A8]",

    secondary:
      "bg-[#CAD0D7] text-white hover:bg-[#2E3C54]",

    outline:
      "border border-[#3770A8] text-[#242424] hover:bg-[#3770A8] hover:text-white",
  };

  // Rounded
  const roundedStyles = {
    none: "rounded-none",
    // sm: "rounded-sm",
    // md: "rounded-md",
    // lg: "rounded-lg",
    // xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        shrink-0
        transition-colors
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

export default Icons;
