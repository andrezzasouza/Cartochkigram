import { JSX } from "react";
import styled from "styled-components";

interface IInputContainer {
  placeholder: string;
  element: JSX.Element;
  type: string;
  required: boolean;
}

export default function InputContainer({
  placeholder,
  element,
  type,
  required
}: IInputContainer) {
  return (
    <InputLabelContainer>
      <label>
        {element}
        {placeholder}
      </label>
      <StyledInput placeholder={placeholder} type={type} required={required} />
    </InputLabelContainer>
  );
}

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  background-color: #d4dbe8;
  border: 2px solid #32476f;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 0 0 10px;
  color: #32476f;
`;

const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: row;
    gap: 0 3px;
    align-items: center;
  }
`;
