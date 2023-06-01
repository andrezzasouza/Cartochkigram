import styled from "styled-components";
import {
  EnvelopeOpen,
  Password,
  NotePencil,
  Question,
} from "@phosphor-icons/react";
import AlternativeEntry from "../AlternativeEntry/AlternativeEntry";
import MoreInfo from "../MoreInfo/MoreInfo";
import InputContainer from "../InputContainer/InputContainer";
import FormButton from "../FormButton/FormButton";

const EntryHeading = styled.h2`
  font-size: 32px;
  margin: 30px 0 10px;
  color: #32476f;
  font-weight: 800;
`;

const ResetPwd = styled.p`
  margin-top: 5px;
  cursor: pointer;
  font-size: 13px;
  text-align: center;
  color: #6088d2;

  &:hover {
    color: #32476f;
  }
`;

const Description = styled.p`
  margin: 10px 0 15px;
  font-weight: 700;
  font-size: 17px;
`;

const inputFields = [
  {
    name: "E-mail",
    element: <EnvelopeOpen size={20} color="#32476F" weight="duotone" />,
    type: "e-mail",
    required: true,
  },
  {
    name: "Senha",
    element: <Password size={20} color="#32476F" weight="duotone" />,
    type: "password",
    required: true,
  },
];

export default function LogInForm() {
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

  return (
    <>
      <EntryHeading>Добро пожаловать!</EntryHeading>
      <Description>Faça o login com seu e-mail e senha:</Description>
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
        <FormButton>Entrar!</FormButton>
      </form>
      <ResetPwd onClick={() => alert("Resetar senha!")}>
        Esqueceu sua senha? Clique aqui!
      </ResetPwd>
      <AlternativeEntry
        alternativeHeading={"Ou faça seu login de outra forma:"}
      />
      <EntryHeading>Sua primeira vez aqui?</EntryHeading>
      <MoreInfo itemsArray={itemsArray} />
    </>
  );
}
