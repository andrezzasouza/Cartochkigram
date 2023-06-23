import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

export default function FlashcardTopicCard({ children, xs }) {
  return (
    <Grid item xs={xs} onClick={() => console.log()}>
      <Card>{children}</Card>
    </Grid>
  );
}
