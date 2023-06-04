"use client";

import styled from "styled-components";
import FormContainer from "@/components/FormContainer/FormContainer";
import SignUpForm from "@/components/SignUpForm/SignUpForm";
import LogoTitle from "@/components/LogoTitle/LogoTitle";
import Link from "next/link";

export default function SignUp() {
  return (
    <SignUpPage>
      <section>
        <Link href="/">
          <LogoTitle textSize={"75px"} />
        </Link>
        <LeftSignUpContent></LeftSignUpContent>
      </section>
      <FormContainer>
        <SignUpForm></SignUpForm>
      </FormContainer>
    </SignUpPage>
  );
}

const SignUpPage = styled.main`
  background-color: #32476f;
  display: flex;
  justify-content: center;
  max-width: 1190px;
  margin: 0 auto;

  & > section:first-of-type {
    max-width: 715px;
    margin: 30px 0 0;
  }
`;

const LeftSignUpContent = styled.div`
  width: 715px;
  background-color: #ffffff;
`;
