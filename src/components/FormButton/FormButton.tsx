import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function FormButton({ children }: PropsWithChildren) {
  return <StyledButton type="submit">{children}</StyledButton>;
}

const StyledButton = styled.button`
  margin: 5px 0;
  background-color: #32476f;
  border: 2px solid #32476f;
  border-radius: 20px;
  padding: 2px 10px;
  color: #ffffff;
  width: 100%;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #0f2854;
    border: 2px solid #0a1d3e;
    color: #ffffff;
  }
`;
