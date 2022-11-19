import React, { FC, ButtonHTMLAttributes, HTMLAttributes } from "react";
import cn from "classnames";

type Color =
  | "default"
  | "primary"
  | "secondary"
  | "white"
  | "white-text"
  | "danger"
  | "gray";

type ButtonProps = {
  color?: Color;
  full?: boolean;
  loading?: boolean;
  contentFullSize?: boolean;
  style?: HTMLAttributes<HTMLButtonElement>["style"];
} & Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "type" | "disabled"
>;

const Button = ({
  color = "default",
  disabled = false,
  contentFullSize = false,
  loading = false,
  onClick,
  ...props
}: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(event);
  };

  return (
    <button
      {...props}
      disabled={disabled}
      className={cn({
        [`rounded-full text-white} w-28 px-4 py-2`]: true,
        "bg-yellow hover:bg-blue hover:text-grey-100 transition-colors":
          color === "primary" && !disabled,
        "bg-gray": color === "gray" || disabled,
        "bg-blue-grey-100": color === "default",
      })}
      onClick={handleClick}
    >
      Enviar
    </button>
  );
};

export default Button;
