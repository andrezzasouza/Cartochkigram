import styled from "styled-components";
import AlternativeEntry from "@/components/AlternativeEntry/AlternativeEntry";
import MoreInfo from "@/components/MoreInfo/MoreInfo";
import InputContainer from "@/components/InputContainer/InputContainer";
import {
  EnvelopeOpen,
  Password,
  Cake,
  ShieldCheck,
  Pi,
  TextAa,
  SignIn,
  Question,
  Student,
} from "@phosphor-icons/react";
import FormButton from "@/components/FormButton/FormButton";
import { FormEvent, useState } from "react";
import ButtonLoading from "@/components/ButtonLoading/ButtonLoading";
import SelectOptions from "@/components/SelectOptions/SelectOptions";

export default function SignUpForm() {
  const [level, setLevel] = useState<string>("");
  const [latinName, setLatinName] = useState<string>("");
  const [cyrillicName, setCyrillicName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatedPassword, setRepeatedPassword] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const selectData = {
    labelTitle: "Qual é seu nível atual de russo?",
    iconElement: <Student size={20} color="#32476f" weight="duotone" />,
    id: "level-select",
    labelId: "level-select-label",
    variable: level,
    setVariable: setLevel,
    width: "342.05px",
    disabled: disabled,
    options: [
      {
        optionName: "Nunca vi nada de russo.",
        optionValue: "zero",
      },
      {
        optionName: "Só sei o alfabeto e umas palavras soltas.",
        optionValue: "abvgues",
      },
      {
        optionName: "Sei frases e palavras, mas não consigo me comunicar.",
        optionValue: "slova",
      },
      {
        optionName: "Consigo me comunicar de forma básica.",
        optionValue: "kagdila",
      },
      {
        optionName: "Já me comunico bem, mas quero praticar mais",
        optionValue: "yagovariu",
      },
    ],
  };

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
      level,
      latinName,
      cyrillicName,
      email,
      birthdate,
      password,
      repeatedPassword,
    };
  }

  function checkSignUpData() {
    if (latinName.length < 2) {
      alert("Seu nome deve conter pelo menos 2 caracteres");
    }
    // check latin alphabet
    // check russian alphabet
    // check birthdate range
    // check e-mail format
    if (password.length < 8) {
      alert("Sua senha deve ter pelo menos 8 caracteres!");
    }
    if (repeatedPassword !== password) {
      alert("A senha e a confirmação da senha devem ser iguais!");
    }
    if (level === "") {
      alert("É necessário escolher seu nível no idioma.");
    }
  }

  return (
    <>
      <EntryHeader>Crie sua conta aqui!</EntryHeader>
      <form onSubmit={signUp}>
        <SelectOptions selectData={selectData} />
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
        <FormButton disabledStyle={disabled}>
          {disabled ? <ButtonLoading /> : "Criar conta!"}
        </FormButton>
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
