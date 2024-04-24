import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

const InputField = forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        className={` p-1 m-2  border-gray-500 focus:border-blue-400 outline-none rounded-md w-full ${className}`}
      />
    );
  }
);

export default InputField;
