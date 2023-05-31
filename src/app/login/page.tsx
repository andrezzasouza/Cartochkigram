"use client";

import Header from "../../components/Header/Header";
import FormContainer from "../../components/FormContainer/FormContainer";
import styled from "styled-components";
import LoginForm from "../../components/LogInForm/LogInForm";

const LoginPage = styled.main`
  background-color: #32476f;
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  inset: 0 0 0 0;
`;

const LoginImage = styled.img`
  width: 715px;
  border-radius: 20px 20px 0 20px;
  position: absolute;
  bottom: 85px;
  left: calc((100vw - 715px) / 5.5);
`;

export default function Login() {
  return (
    <LoginPage>
      <LoginImage
        src="https://media.istockphoto.com/id/941440378/pt/foto/college-friends-study-for-exam.jpg?s=1024x1024&w=is&k=20&c=vNsGDl4QueCILJJb2zPyYCPOqpOhhTAxpI0VCaWgGO4="
        alt="Three girls studying with flashcards"
      />
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </LoginPage>
  );
}
