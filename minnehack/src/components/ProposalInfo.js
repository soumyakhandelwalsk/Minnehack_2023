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
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button color="secondary">Vote For</Button>
      <br></br>
      <Button color="primary">Vote Against</Button>
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
      <Container maxWidth="sm">
        <Typography variant="h4" component="div">{causeTitle}</Typography>
        <Image src={imageURL} alt="Cause Image" />
        <Grid>
          <Typography>{longDescription}</Typography></Grid>
        <Card variant="outlined">{comments_card}</Card>
        <Grid>
          <Typography variant="h4" component="div">Vote:</Typography>
          {vote_buttons}
        </Grid>
      </Container>
  );
}

export default ProposalInfo;