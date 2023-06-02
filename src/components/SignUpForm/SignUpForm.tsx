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
import { FormEvent, useState } from "react";
import { setMaxIdleHTTPParsers } from "http";

export default function SignUpForm() {

  const [latinName, setLatinName] = useState<string>('');
  const [cyrillicName, setCyrillicName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [birthdate, setBirthdate] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);

  const inputFields = [
    {
      name: "Nome no alfabeto latino",
      type: "string",
      element: <TextAa size={20} color="#32476F" weight="duotone" />,
      required: true,
      value: latinName,
      setter: setLatinName,
    },
    {
      name: "Nome no alfabeto cirílico",
      type: "string",
      element: <Pi size={20} color="#32476F" weight="duotone" />,
      required: false,
      value: cyrillicName,
      setter: setCyrillicName,
    },
    {
      name: "E-mail",
      type: "e-mail",
      element: <EnvelopeOpen size={20} color="#32476F" weight="duotone" />,
      required: true,
      value: email,
      setter: setEmail,
    },
    {
      name: "Aniversário",
      type: "date",
      element: <Cake size={20} color="#32476F" weight="duotone" />,
      required: false,
      value: birthdate,
      setter: setBirthdate,
    },
    {
      name: "Senha",
      type: "password",
      element: <Password size={20} color="#32476F" weight="duotone" />,
      required: true,
      value: password,
      setter: setPassword,
    },
    {
      name: "Confirmação da senha",
      type: "password",
      element: <ShieldCheck size={20} color="#32476F" weight="duotone" />,
      required: true,
      value: repeatedPassword,
      setter: setRepeatedPassword,
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

    function signUp(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setDisabled(true);
      const body = {
        latinName,
        cyrillicName,
        email,
        birthdate,
        password,
        repeatedPassword
      };
      alert("SignUp");
    }

  return (
    <>
      <EntryHeader>Crie sua conta aqui!</EntryHeader>
      <form onSubmit={signUp}>
        {inputFields.map((field, index) => (
          <InputContainer
            key={`login-input-${index}`}
            element={field.element}
            placeholder={field.name}
            type={field.type}
            required={field.required}
            value={field.value}
            setter={field.setter}
            disabled={disabled}
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
