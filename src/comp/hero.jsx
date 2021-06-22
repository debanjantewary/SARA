import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          S.A.R.A.
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          This group consists of Satyajit Ghosh, Argha Chatterjee, Riju tewary,
          Aritra Pandey. We share our moments here.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="secondary">
                VIEW ALBUM
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="inherit">
                CONTACT US
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
