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
`;
