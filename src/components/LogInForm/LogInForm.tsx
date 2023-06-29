import {
  EnvelopeOpen,
  Password,
  NotePencil,
  Question,
} from "@phosphor-icons/react";
import { EntryHeading, ResetPwd, ResetContainer, Description } from "./layout";
import AlternativeEntry from "@/components/AlternativeEntry/AlternativeEntry";
import MoreInfo from "@/components/MoreInfo/MoreInfo";
import InputContainer from "@/components/InputContainer/InputContainer";
import FormButton from "@/components/FormButton/FormButton";
import { useState, FormEvent } from "react";
import ButtonLoading from "@/components/ButtonLoading/ButtonLoading";

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
