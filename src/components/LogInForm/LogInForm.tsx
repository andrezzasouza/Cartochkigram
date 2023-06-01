import styled from "styled-components";
import { EnvelopeOpen, Password, NotePencil, Question } from "@phosphor-icons/react";
import AlternativeEntry from "../AlternativeEntry/AlternativeEntry";
import MoreInfo from "../MoreInfo/MoreInfo";
import InputContainer from "../InputContainer/InputContainer";

const EntryHeader = styled.h2`
  font-size: 30px;
  margin: 40px 0 10px 0;
  color: #32476f;
  font-weight: 800;
`;

const FormButton = styled.button`
  margin: 5px 0;
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

const inputFields = [
  {
    name: "E-mail",
    element: <EnvelopeOpen size={20} color="#32476F" weight="duotone" />,
    type: "e-mail",
  },
  {
    name: "Senha",
    element: <Password size={20} color="#32476F" weight="duotone" />,
    type: "password",
  },
];



export default function LogInForm() {
  const itemsArray = [
    {
      element: <NotePencil size={28} weight="duotone" />,
      description: "Crie sua conta!",
    },
    {
      element: <Question size={28} weight="duotone" />,
      description: "Saiba mais!",
    },
  ];

  return (
    <>
      <EntryHeader>Добро пожаловать!</EntryHeader>
      <h3>Faça o login com seu e-mail e senha:</h3>
      {inputFields.map((field, index) => (
        <InputContainer
          key={`login-input-${index}`}
          element={field.element}
          placeholder={field.name}
          type={field.type}
        />
      ))}
      <FormButton type="submit">Entrar!</FormButton>
      <p>Esqueceu sua senha?</p>
      <AlternativeEntry
        alternativeHeading={"Ou faça seu login de outra forma:"}
      />
      <EntryHeader>Sua primeira vez aqui?</EntryHeader>
      <MoreInfo itemsArray={itemsArray} />
    </>
  );
}
