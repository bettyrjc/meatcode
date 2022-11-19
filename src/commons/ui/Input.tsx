import React, {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
} from "react";
import cn from "classnames";

type ExposedNativeInputProps =
  | "autoComplete"
  | "id"
  | "name"
  | "onChange"
  | "onKeyUp"
  | "onKeyDown"
  | "onKeyPress"
  | "placeholder"
  | "type"
  | "value"
  | "defaultValue"
  | "disabled"
  | "readOnly"
  | "maxLength"
  | "onPaste"
  | "onBlur";

export interface InputProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, ExposedNativeInputProps> {
  invalid?: boolean;
  prefix?: string | ReactElement;
  suffix?: string | ReactElement;
  accepts?: string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  className?: string;
  error?: any;
  hidden?: boolean;
  containerClass?: string;
  isValid?: boolean;
  errorIcon?: boolean;
}
const Input = forwardRef<HTMLInputElement, InputProps>(function InputWithRef(
  {
    type = "text",
    invalid = false,
    prefix,
    suffix,
    accepts,
    autoComplete = "on",
    className,
    error,
    hidden = false,
    containerClass,
    maxLength,
    isValid = false,
    errorIcon = false,
    ...props
  },
  ref
) {
  const containerClassName = cn({
    "overflow-hidden text-sm flex items-stretch  border w-full text-sm":
      true,
    "bg-white": !props.disabled,
    "border-grey-300": !invalid && !props.disabled,
    "focus-within:ring-1 focus-within:ring-yellow focus-within:border-yellow":
      !error,
    "border-red border-2 focus-within:ring-1 focus-within:ring-red": error,
    "bg-grey-200 border-grey-200 text-gray": props.disabled,
    "bg-grey-200": props.readOnly,
  });

  return (
    <div>
      <div className={containerClassName}>
        {prefix ? <div className="py-4 pl-4 text-black">{prefix}</div> : null}

        <div className="relative flex-1">
          <input
            type={type}
            autoComplete={autoComplete}
            {...props}
            ref={ref}
            className={`w-full p-4 bg-transparent focus:outline-none ${
              error && "border-red"
            }`}
            hidden={hidden}
          />
        </div>
      </div>

      {error && (
        <div className="flex flex-row justify-between mt-1">
          <div className="text-red">{error}</div>
        </div>
      )}
    </div>
  );
});

export default Input;
