import styled from "styled-components";
import { EnvelopeOpen, Password } from "@phosphor-icons/react";
import AlternativeEntry from "../AlternativeEntry/AlternativeEntry";
import MoreInfo from "../MoreInfo/MoreInfo";

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

const EntryHeader = styled.h2`
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
  return (
    <>
      <EntryHeader>Добро пожаловать!</EntryHeader>
      <h3>Faça o login com seu e-mail e senha:</h3>
      {inputFields.map((field, index) => (
        <InputLabelContainer key={index}>
          <label>
            {field.element}
            {field.name}
          </label>
          <DataInput placeholder={field.name} type={field.type} />
        </InputLabelContainer>
      ))}
      <FormButton type="submit">Entrar!</FormButton>
      <AlternativeEntry
        alternativeHeading={"Ou faça seu login de outra forma:"}
      />
      <EntryHeader>Sua primeira vez aqui?</EntryHeader>
      <MoreInfo />
    </>
  );
}
