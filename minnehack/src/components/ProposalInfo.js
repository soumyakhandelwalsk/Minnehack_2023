import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid'
import Image from 'mui-image'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';

function ProposalInfo({id, causeTitle, longDescription, imageURL, comments}) {
  const vote_buttons = (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ mx: 1 }}>
      <Button color="secondary" href="../signIn">Vote For</Button>
      <br></br>
      <Button color="primary" href="../signIn">Vote Against</Button>
    </ButtonGroup>);

  const comments_card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
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

  return (
      <Container sx={{ my: 2 }}>
        <Typography variant="h4" component="div">{causeTitle}</Typography>
        <Grid container spacing={2} sx={{ my: 1.2 }}>
          <Grid item xs={8}>
            <Image src={imageURL} alt="Cause Image" />
            <Grid>
              <Typography>{longDescription}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">{comments_card}</Card>
          </Grid>
        </Grid>
        <Grid sx={{ my: 10 }}>
          <Typography variant="h4" component="span">Vote:</Typography>
          {vote_buttons}
        </Grid>
      </Container>
  );
}

export default ProposalInfo;