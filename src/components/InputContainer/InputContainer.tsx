import { nunito } from "@/app/fonts";
import { Dispatch, JSX } from "react";
import styled from "styled-components";

interface IInputContainer {
  placeholder: string;
  element: JSX.Element;
  type: string;
  required: boolean;
  value: string;
  setter: Dispatch<string>;
  disabled: boolean;
}

interface IInputProps {
  disabledStyle: boolean;
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
        disabledStyle={disabled}
      />
    </InputLabelContainer>
  );
}

const StyledInput = styled.input<Pick<IInputProps, "disabledStyle">>`
  width: 100%;
  height: 30px;
  border: 2px solid #32476f;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 0 0 10px;
  cursor: ${(props) => (props.disabledStyle ? "wait " : "auto")};
  color: ${(props) => (props.disabledStyle ? "#e8f1fe" : "#32476f")};
  opacity: ${(props) => (props.disabledStyle ? 0.5 : 1)};
  background-color: ${(props) =>
    props.disabledStyle ? "#32476f" : "#e8f1fe"};
  font-size: 16px;
  &::placeholder {
    color: #818790;
  }
`;

const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
  label {
    display: flex;
    flex-direction: row;
    gap: 0 3px;
    align-items: center;
    margin-bottom: 2px;
  }
`;
