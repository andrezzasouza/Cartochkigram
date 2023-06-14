import Paper from "@mui/material/Paper";
import styled from "styled-components";

export default function PaperCard({ children }) {
  return <StyledPaper elevation={1}>{children}</StyledPaper>;
}

const StyledPaper = styled(Paper)`
  padding: 30px;
  width: fit-content;
  
  & > h2 {
    color: #32476f;
    font-size: 40px;
    margin: 0 0 20px;
  }
`;
