import { nunito } from "@/app/fonts";
import { Dispatch, JSX } from "react";
import { StyledInput, InputLabelContainer } from "./layout";

interface IInputContainer {
  placeholder: string;
  element: JSX.Element;
  type: string;
  required: boolean;
  value: string;
  setter: Dispatch<string>;
  disabled: boolean;
}

export default function InputContainer({
  placeholder,
  element,
  type,
  required,
  value,
  setter,
  disabled,
}: IInputContainer) {
  return (
    <InputLabelContainer>
      <label htmlFor={`${placeholder}Field`}>
        {element}
        {placeholder}
      </label>
      <StyledInput
        className={nunito.className}
        placeholder={placeholder}
        type={type}
        required={required}
        value={value}
        onChange={(e) => setter(e.target.value)}
        id={`${placeholder}Field`}
        disabled={disabled}
      />
    </InputLabelContainer>
  );
}
