import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function FormContainer({ children }: PropsWithChildren) {
  return(
    <FormContainerComponent>
      {children}
    </FormContainerComponent>
  );
}

const FormContainerComponent = styled.section`
  position: absolute;
  bottom: 0;
  left: calc((100vw - 715px) * 1.22);
  max-width: 450px;
  transform: translateX(-50px);
  background: #fafafa;
  border: 3px solid #32476f;
  box-shadow: 11px -5px 0px 11px rgba(203, 189, 189, 0.25);
  border-radius: 20px 20px 0px 0px;
  padding: 5px 60px 50px;
  color: #000000;
`;