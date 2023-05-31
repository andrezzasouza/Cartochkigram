"use client";

import styled from "styled-components";
import FormContainer from "@/components/FormContainer/FormContainer";
import SignUpForm from "@/components/SignUpForm/SignUpForm";

export default function SignUp() {
  return (
    <SignUpPage>
      <FormContainer>
        <SignUpForm></SignUpForm>
      </FormContainer>
    </SignUpPage>
  );
}

const SignUpPage = styled.main`
  background-color: #32476f;
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  inset: 0 0 0 0;
`;
