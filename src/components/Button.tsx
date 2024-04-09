import { ReactNode, forwardRef } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, ...rest }, ref) => {
    return (
      <>
        <button {...rest} ref={ref}>
          {children}
        </button>
      </>
    );
  }
);

export default Button;
