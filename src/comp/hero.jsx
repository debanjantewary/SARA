import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import { githubProvider, googleProvider } from "../oauth/oauthMethods";
// import SocialMediaAuth from "../oauth/auth";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../UI/loading";
// import UserProfile from "../user/profile";
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
  // const handleOnClick = async (provider) => {
  //   const res = await SocialMediaAuth(provider);
  //   console.log(res);
  // };

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated, user, isLoading } = useAuth0();
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        {!isAuthenticated && (
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            S.A.R.A.
          </Typography>
        )}
        {isAuthenticated && (
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Hello, {user.given_name}
          </Typography>
        )}
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {/* <UserProfile /> */}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                // onClick={() => loginWithRedirect()}
                variant="contained"
                color="secondary"
              >
                Services
              </Button>
            </Grid>

            <Grid item>
              {!isAuthenticated && (
                <Button
                  onClick={() => loginWithRedirect()}
                  variant="outlined"
                  color="inherit"
                >
                  Sign In
                </Button>
              )}
              {isAuthenticated && (
                <Button
                  // onClick={() => logout()}
                  variant="outlined"
                  color="inherit"
                >
                  My Profile
                </Button>
              )}
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
