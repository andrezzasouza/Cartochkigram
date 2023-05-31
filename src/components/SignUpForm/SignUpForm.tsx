import styled from "styled-components";
import AlternativeEntry from "../AlternativeEntry/AlternativeEntry";
import MoreInfo from "../MoreInfo/MoreInfo";

export default function SignUpForm() {
  return (
    <>
      <AlternativeEntry
        alternativeHeading={"Ou crie sua conta de outra forma:"}
      />
      <EntryHeader>Sua primeira vez aqui?</EntryHeader>
      <MoreInfo />
    </>
  );
}

const EntryHeader = styled.h2`
  font-size: 30px;
  margin: 40px 0 10px 0;
  color: #32476f;
  font-weight: 800;
`;