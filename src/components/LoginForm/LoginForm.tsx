import styled from "styled-components";
import {
  FacebookLogo,
  GoogleLogo,
  GithubLogo,
  Question,
  NotePencil,
  EnvelopeOpen,
  Password,
} from "@phosphor-icons/react";

const DataInput = styled.input`
  width: 100%;
  height: 30px;
  background-color: #d4dbe8;
  border: 2px solid #32476f;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 0 0 10px;
  color: #32476f;
`;

const AlternativeLogin = styled.section`
  display: flex;
  justify-content: space-between;
`;

const LoginHeader = styled.h2`
  font-size: 30px;
  margin: 40px 0 10px 0;
  color: #32476f;
  font-weight: 800;
`;

const FormButton = styled.button`
  margin: 5px 0 25px 0;
  background-color: #ffffff;
  border: 2px solid #32476f;
  border-radius: 20px;
  padding: 2px 10px;
  color: #32476f;
  width: 50%;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #32476f;
    border: 2px solid #32476f;
    color: #ffffff;
  }
`;

const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: row;
    gap: 0 3px;
  }
`;

const LogoButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 2px solid #32476f;
  border-radius: 20px;
  margin: 5px 0 5px;
  padding: 2px 8px 2px 4px;
  color: #32476f;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #32476f;
    border: 2px solid #32476f;
    color: #ffffff;
  }
`;

const inputFields = [
  {
    name: "E-mail",
    element: <EnvelopeOpen size={20} color="#32476F" weight="duotone" />,
    type: "e-mail"
  },
  {
    name: "Senha",
    element: <Password size={20} color="#32476F" weight="duotone" />,
    type: "password"
  },
];

export default function LoginForm() {
  return (
    <>
      <LoginHeader>Добро пожаловать!</LoginHeader>
      <p>Faça o login com seu e-mail e senha:</p>
      {inputFields.map((field, index) => (
        <InputLabelContainer key={index}>
          <label>
            {field.element}
            {field.name}
          </label>
          <DataInput placeholder={field.name} type={field.type} />
        </InputLabelContainer>
      ))}
      <FormButton>Entrar!</FormButton>
      <p>Ou faça seu login de outra forma:</p>
      <AlternativeLogin>
        <LogoButton>
          <FacebookLogo size={28} color="#32476F" weight="duotone" />
          <span>Facebook</span>
        </LogoButton>
        <LogoButton>
          <GoogleLogo size={28} color="#32476F" weight="duotone" />
          <span>Google</span>
        </LogoButton>
        <LogoButton>
          <GithubLogo size={28} color="#32476F" weight="duotone" />
          <span>Github</span>
        </LogoButton>
      </AlternativeLogin>
      <LoginHeader>Sua primeira vez aqui?</LoginHeader>
      <AlternativeLogin>
        <LogoButton>
          <NotePencil size={28} color="#32476F" weight="duotone" />
          Crie sua conta!
        </LogoButton>
        <LogoButton>
          <Question size={28} color="#32476F" weight="duotone" />
          Saiba mais!
        </LogoButton>
      </AlternativeLogin>
    </>
  );
}
