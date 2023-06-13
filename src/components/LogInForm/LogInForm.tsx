import styled from "styled-components";
import {
  EnvelopeOpen,
  Password,
  NotePencil,
  Question,
} from "@phosphor-icons/react";
import AlternativeEntry from "@/components/AlternativeEntry/AlternativeEntry";
import MoreInfo from "@/components/MoreInfo/MoreInfo";
import InputContainer from "@/components/InputContainer/InputContainer";
import FormButton from "@/components/FormButton/FormButton";
import { useState, FormEvent } from "react";
import ButtonLoading from "@/components/ButtonLoading/ButtonLoading";

const EntryHeading = styled.h2`
  font-size: 32px;
  margin: 30px 0 15px;
  color: #32476f;
  font-weight: 800;
`;

const ResetPwd = styled.span`
  margin-top: 5px;
  font-size: 13px;
  color: #6088d2;
  width: fit-content;
  text-align: center;

  &:hover {
    color: #32476f;
    cursor: pointer;
  }
`;

const ResetContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Description = styled.h3`
  margin: 15px 0 20px;
  font-weight: 700;
  font-size: 17px;
`;

const itemsArray = [
  {
    element: <NotePencil size={28} weight="duotone" />,
    description: "Crie sua conta!",
    address: "/signup",
  },
  {
    element: <Question size={28} weight="duotone" />,
    description: "Saiba mais!",
    address: "/",
  },
];

export default function LogInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const inputFields = [
    {
      name: "E-mail",
      element: <EnvelopeOpen size={20} color="#32476F" weight="duotone" />,
      type: "e-mail",
      required: true,
      value: email,
      setter: setEmail,
    },
    {
      name: "Senha",
      element: <Password size={20} color="#32476F" weight="duotone" />,
      type: "password",
      required: true,
      value: password,
      setter: setPassword,
    },
  ];

  function logIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDisabled(true);
    const body = {
      email,
      password,
    };
    alert("Login");
  }

  function checkLogInData() {
    // check e-mail format
    if (password.length < 8) {
      alert("Sua senha deve ter pelo menos 8 caracteres!");
    }
  }

  return (
    <>
      <EntryHeading>Добро пожаловать!</EntryHeading>
      <Description>Faça o login com seu e-mail e senha:</Description>
      <form onSubmit={logIn}>
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
          {disabled ? <ButtonLoading /> : "Entrar!"}
        </FormButton>
      </form>
      <ResetContainer>
        <ResetPwd onClick={() => alert("Resetar senha!")}>
          Esqueceu sua senha? Clique aqui!
        </ResetPwd>
      </ResetContainer>
      <AlternativeEntry
        alternativeHeading={"Ou faça seu login de outra forma:"}
      />
      <EntryHeading>Sua primeira vez aqui?</EntryHeading>
      <MoreInfo itemsArray={itemsArray} />
    </>
  );
}
