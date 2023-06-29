import styled from "styled-components";

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

export { EntryHeading, ResetPwd, ResetContainer, Description };
