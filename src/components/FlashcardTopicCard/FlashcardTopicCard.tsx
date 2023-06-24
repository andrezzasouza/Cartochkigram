import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import styled from "styled-components";

export default function FlashcardTopicCard({ children, xs, link }) {
  return (
    <Grid item xs={xs}>
      <StyledCard>
        <Link href={link}>{children}</Link>
      </StyledCard>
    </Grid>
  );
}

const StyledCard = styled(Card)`
  padding: 20px;
  height: 100%;

  &:hover {
    cursor: pointer;
    background-color: #fef2f2;
  }

  & > a > div {
    display: flex;
    gap: 4px;
  }

  & > a > div > div {
    background-color: #a73e3e;
    font-size: 10px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    width: fit-content;
    padding: 2px 4px;
    margin: 0 0 10px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 10px;
  }
`;
