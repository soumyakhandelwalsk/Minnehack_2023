import * as React from 'react';

//import Button from '@mui/material/Button';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid'
import Image from 'mui-image'
import Navbar from "../components/Navbar.js";
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#8e1600',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#0c3823',
    },
  },
});

function Main() {
  const { id } = useParams();
  // console.log("!!!!!!", id)

  const comments_card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h4" component="div">
          Comments
        </Typography>
        <Typography variant="h6" component="div" color="green">
          For petition
        </Typography>
        <Typography variant="body2">
          I support this initiative since this is where my grandkids play after school each day.
          I cannot believe the local legislation wants to tear this down for yet another 'luxury' building.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Loren Green, Greendale, Jan 28 2023
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6" component="div" color="red">
          Against petition
        </Typography>
        <Typography variant="body2">
          We already have 3 other parks in walking distance (3 mile radius). Well maintained parks are more important
          than having one park for each family. This park is a dump and should be sold to property developers.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Jim Kirk, Greendale, Jan 28 2023
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read more comments</Button>
      </CardActions>
    </React.Fragment>
  );

  const para_text = (<p style={{ textAlign: "left" }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
    luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
    Suspendisse congue vulputate lobortis. Pellentesque at interdum
    tortor. Quisque arcu quam, malesuada vel mauris et, posuere
    sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
    metus, efficitur lobortis nisi quis, molestie porttitor metus.
    Pellentesque et neque risus. Aliquam vulputate, mauris vitae
    tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
    lectus vitae ex.{" "}
  </p>);

  const vote_buttons = (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button color="secondary">Vote For</Button>
      <br></br>
      <Button color="primary">Vote Against</Button>
    </ButtonGroup>);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth="sm">
        <h1>Save the Greendale Park</h1>
        <Image src="images/greendale-park.jpg" alt="picture of a park" />
        <Grid>{para_text}</Grid>
        <Card variant="outlined">{comments_card}</Card>
        <Paper><h1>Vote:</h1>{vote_buttons}</Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Main;