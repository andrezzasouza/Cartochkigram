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
  display: flex;
`;
