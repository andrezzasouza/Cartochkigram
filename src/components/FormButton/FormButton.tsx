import { PropsWithChildren } from "react";
import styled from "styled-components";

interface IFormButton extends PropsWithChildren {
  disabledStyle: boolean;
}

export default function FormButton({ children, disabledStyle }: IFormButton) {
  return (
    <StyledButton
      type="submit"
      disabledStyle={disabledStyle}
      disabled={disabledStyle}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<Pick<IFormButton, "disabledStyle">>`
  margin: 5px 0;
  background-color: #32476f;
  border: 2px solid #32476f;
  border-radius: 20px;
  padding: 5px 10px;
  color: #ffffff;
  width: 100%;
  transition: 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 37px;
  opacity: ${(props) => (props.disabledStyle ? 0.75 : 1)};
  cursor: ${(props) => (props.disabledStyle ? "wait" : "auto")};

  &:hover {
    background-color: #0f2854;
    border: 2px solid #0a1d3e;
    color: #ffffff;
  }
`;
