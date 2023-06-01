import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function FormButton({ children }: PropsWithChildren) {
  return <StyledButton type="submit">{children}</StyledButton>;
}

const StyledButton = styled.button`
  margin: 5px 0 25px 0;
  background-color: #ffffff;
  border: 2px solid #32476f;
  border-radius: 20px;
  padding: 2px 10px;
  color: #32476f;
  width: 100%;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #32476f;
    border: 2px solid #32476f;
    color: #ffffff;
  }
`;
