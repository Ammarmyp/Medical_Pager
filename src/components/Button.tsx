import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, ...rest }, ref) => {
    return (
      <>
        <button
          className={`border-1 bg-blue-700 p-2 m-2  rounded-md text-white hover:bg-[#1c4f66]  duration-300 focus:bg-blue-600 disabled:bg-gray-600 ${className}`}
          {...rest}
          ref={ref}
        >
          {children}
        </button>
      </>
    );
  }
);

export default Button;
