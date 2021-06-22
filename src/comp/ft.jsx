import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://firebasestorage.googleapis.com/v0/b/agfile-cdn.appspot.com/o/WhatsApp%20Image%202021-06-16%20at%2012.03.09%20AM.jpeg?alt=media&token=a00d0a42-51ab-4c81-9f2b-3a203840a7fe)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: 380,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    // backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function Ft(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{
        backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/agfile-cdn.appspot.com/o/WhatsApp%20Image%202021-06-16%20at%2012.03.09%20AM.jpeg?alt=media&token=a00d0a42-51ab-4c81-9f2b-3a203840a7fe")`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none", height: 500 }}
          src="https://firebasestorage.googleapis.com/v0/b/agfile-cdn.appspot.com/o/WhatsApp%20Image%202021-06-16%20at%2012.03.09%20AM.jpeg?alt=media&token=a00d0a42-51ab-4c81-9f2b-3a203840a7fe"
          alt="Hero"
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={3}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {/* {post.title} */}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {/* {post.description} */}
            </Typography>
            <Link variant="subtitle1" href="#">
              {/* {post.linkText} */}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

Ft.propTypes = {
  post: PropTypes.object,
};
