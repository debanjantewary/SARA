import React from "react";
import { Badge } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@material-ui/core";
// import { NavLink as RouterNavLink } from "react-router-dom";
import Loading from "../UI/loading";
export default function Profile() {
  // const { logout } = useAuth0();
  const { isAuthenticated, user } = useAuth0();
  const { isLoading } = useAuth0();
  const admin = "rijupubgmobile@gmail.com";
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <Grid
      style={{ padding: 30 }}
      container
      spacing={5}
      diplay="flex"
      alignContent="center"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        {isAuthenticated && <Avatar alt="Cindy Baker" src={user.picture} />}
        {!isAuthenticated && <h1>Not Signed In</h1>}
      </Grid>
      <Grid item>
        <Badge color="secondary" badgeContent="SARA USER">
          <Typography>
            <h1>
              {user.given_name}
              {user.family_name}
            </h1>
          </Typography>
        </Badge>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
}
