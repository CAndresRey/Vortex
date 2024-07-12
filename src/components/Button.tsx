import React from "react";
import cn from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  loading?: boolean;
};

const Button = (props: ButtonProps) => {
  const { variant, disabled, loading, ...rest } = props;

  const themeClasses = {
    primary: cn(
      "bg-secondary text-light hover:text-black hover:bg-accent disabled:text-white",
      {
        "disabled:bg-gray-500": disabled,
        "disabled:bg-primary": loading,
      }
    ),

    secondary: `
      text-light
      bg-primary
      hover:bg-accent
      hover:text-black
      disabled:bg-white disabled:border-regular-grey disabled:text-regular-grey
    `,
    tertiary: `
      bg-accent
      text-black
      hover:text-light
      hover:bg-secondary
    `,
  }[variant || "primary"];

  return (
    <button
      className={cn(
        themeClasses,
        `
          box-border 
          h-[36px]
          rounded-md 
          text-body-s
          font-regular
          flex items-center justify-center 
          disabled:cursor-not-allowed
          transition duration-100
          px-6
          py-2
        `,
        { "disabled:opacity-40": disabled }
      )}
      {...rest}
    >
      {props.children}
    </button>
  );
};

export default Button;
