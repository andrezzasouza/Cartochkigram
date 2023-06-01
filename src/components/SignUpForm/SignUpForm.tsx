import styled from "styled-components";
import AlternativeEntry from "../AlternativeEntry/AlternativeEntry";
import MoreInfo from "../MoreInfo/MoreInfo";
import InputContainer from "../InputContainer/InputContainer";
import {
  EnvelopeOpen,
  Password,
  Cake,
  ShieldCheck,
  Pi,
  TextAa,
  SignIn,
  Question,
} from "@phosphor-icons/react";
import FormButton from "../FormButton/FormButton";

export default function SignUpForm() {
  const inputFields = [
    {
      name: "Nome no alfabeto latino",
      type: "string",
      element: <TextAa size={20} color="#32476F" weight="duotone" />,
      required: true,
    },
    {
      name: "Nome no alfabeto cirílico",
      type: "string",
      element: <Pi size={20} color="#32476F" weight="duotone" />,
      required: false,
    },
    {
      name: "E-mail",
      type: "e-mail",
      element: <EnvelopeOpen size={20} color="#32476F" weight="duotone" />,
      required: true,
    },
    {
      name: "Aniversário",
      type: "date",
      element: <Cake size={20} color="#32476F" weight="duotone" />,
      required: false,
    },
    {
      name: "Senha",
      type: "password",
      element: <Password size={20} color="#32476F" weight="duotone" />,
      required: true,
    },
    {
      name: "Confirmação da senha",
      type: "password",
      element: <ShieldCheck size={20} color="#32476F" weight="duotone" />,
      required: true,
    },
  ];

  const itemsArray = [
    {
      element: <SignIn size={28} weight="duotone" />,
      description: "Faça seu login!",
      address: "/login",
    },
    {
      element: <Question size={28} weight="duotone" />,
      description: "Saiba mais!",
      address: "/",
    },
  ];

  return (
    <>
      <EntryHeader>Crie sua conta aqui!</EntryHeader>
      <form onSubmit={() => console.log("signup")}>
        {inputFields.map((field, index) => (
          <InputContainer
            key={`login-input-${index}`}
            element={field.element}
            placeholder={field.name}
            type={field.type}
            required={field.required}
          />
        ))}
        <FormButton>Criar conta!</FormButton>
      </form>
      <AlternativeEntry
        alternativeHeading={"Ou crie sua conta de outra forma:"}
      />
      <EntryHeader>Procurando outra coisa?</EntryHeader>
      <MoreInfo itemsArray={itemsArray} />
    </>
  );
}

const EntryHeader = styled.h2`
  font-size: 30px;
  margin: 40px 0 10px 0;
  color: #32476f;
  font-weight: 800;
`;
