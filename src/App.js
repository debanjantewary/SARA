import React from "react";
import Home from "./Home";
import Navbar from "./UI/navbar";

// import StickyFooter from "./UI/footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Profile from "./user/profile";
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Debanjan Tewary Project
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>

        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body1">S.A.R.A. Group of People</Typography>
            <Copyright />
          </Container>
        </footer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
