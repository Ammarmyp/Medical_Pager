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
          className={`border-1 bg-blue-500 p-2 m-2  rounded-md text-white hover:bg-blue-600 transition-colors focus:bg-blue-400 disabled:bg-gray-600 ${className}`}
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
