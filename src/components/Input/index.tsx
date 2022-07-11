import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";
import "./style.css";

type InputConstraint = {
  validator: (value: string) => boolean;
  message: string;
};

type InputProps = {
  labelText: string;
  id: string;
  onValueChange?: (value: string) => void;
  constraints?: InputConstraint[];
};

const Input = ({
  labelText,
  className,
  id,
  onValueChange,
  constraints,
  ...rest
}: InputProps & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "value">) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  const handleInputBlur = () => {
    if (constraints) {
      const constraint = constraints.find(({ validator }) => validator(value) === false);

      if (constraint) setErrorMessage(constraint.message);
    }
  };

  const handleInputFocus = () => setErrorMessage("");

  const renderErrorMessage = () => (errorMessage ? <p className="error-message">{errorMessage}</p> : null);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
  }, [value]);

  return (
    <>
      <label htmlFor={id} className="label">
        {labelText}
      </label>
      <input
        id={id}
        className={`input${className ? ` ${className}` : ""}`}
        value={value}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...rest}
      />
      {renderErrorMessage()}
    </>
  );
};

export default Input;
