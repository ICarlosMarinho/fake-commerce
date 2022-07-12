import { ButtonHTMLAttributes } from "react";
import "./style.css";
import { WithChildren } from "../../common/types";

const Button = ({
  children,
  className,
  ...rest
}: WithChildren<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">>) => (
  <button className={`button${className ? ` -${className}` : ""}`} {...rest}>
    {children}
  </button>
);

export default Button;
