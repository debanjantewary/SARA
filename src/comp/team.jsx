import React from "react";
import { Grid } from "@material-ui/core";
import IntroCard from "./team_card";

// import FacebookIcon from "@material-ui/icons/Facebook";

export default function Team(props) {
  return (
    <Grid
      container
      spacing={2}
      diplay="flex"
      alignContent="center"
      alignItems="center"
      justify="center"
    >
      <Grid item xl={3}>
        <IntroCard
          title="Argha Chatterjee"
          date="January 19, 2021"
          avatar="https://i2.wp.com/warhype.com/wp-content/uploads/2021/05/argha.jpg?resize=300%2C300&ssl=1"
          image="https://i2.wp.com/warhype.com/wp-content/uploads/2021/05/argha.jpg?resize=300%2C300&ssl=1"
          sd="Hello there! Myself Argha Chaterjee, currently working on WIPRO. "
          detail="Under Cons"
          ttlv="Like for Argha"
          skbrmsg="Love Given To Argha"
          like="11"
        />
      </Grid>
      <Grid item xl={3}>
        <IntroCard
          title="Debanjan Tewary"
          date="October 18, 1997"
          avatar="https://firebasestorage.googleapis.com/v0/b/agfile-cdn.appspot.com/o/Debanjan.jpg?alt=media&token=fa893fed-34df-4771-84f9-678ed808176c"
          image="https://firebasestorage.googleapis.com/v0/b/agfile-cdn.appspot.com/o/Debanjan.jpg?alt=media&token=fa893fed-34df-4771-84f9-678ed808176c"
          sd="Hello there! Myself Argha Chaterjee, currently working on WIPRO. "
          detail="Under Cons"
          ttlv="Like for Riju"
          skbrmsg="Love Given To Riju"
          like="13"
        />
      </Grid>
      <Grid item xl={3}>
        <IntroCard
          title="Satyajit Ghosh"
          date="October 18, 1997"
          avatar="https://firebasestorage.googleapis.com/v0/b/agfile-cdn.appspot.com/o/1452015_1480433368848908_1567200420_n.jpg?alt=media&token=2391a71f-9f94-4adf-a39d-38953be1ef1c"
          image="https://firebasestorage.googleapis.com/v0/b/agfile-cdn.appspot.com/o/1452015_1480433368848908_1567200420_n.jpg?alt=media&token=2391a71f-9f94-4adf-a39d-38953be1ef1c"
          sd="Hello there! Myself Argha Chaterjee, currently working on WIPRO. "
          detail="Under Cons"
          ttlv="Like for Satyajit"
          skbrmsg="YOU HAVE LIKED OUR VIP :) "
          like="VIP"
        />
      </Grid>
      <Grid item xl={3}>
        <IntroCard
          title="Aritra Pandey"
          date="January 19, 1997"
          avatar="https://firebasestorage.googleapis.com/v0/b/agfile-cdn.appspot.com/o/117314828_1585332688315256_8730363177158133773_n.jpg?alt=media&token=fbdd0b0b-88eb-40a7-ae9a-58b3f3a9517c"
          image="https://firebasestorage.googleapis.com/v0/b/agfile-cdn.appspot.com/o/117314828_1585332688315256_8730363177158133773_n.jpg?alt=media&token=fbdd0b0b-88eb-40a7-ae9a-58b3f3a9517c"
          sd="Hello there! Myself Argha Chaterjee, currently working on WIPRO. "
          detail="Under Cons"
          ttlv="Like for Aritra"
          skbrmsg="Liked a pro BOT"
          like="IPAD PRO"
        />
      </Grid>
    </Grid>
  );
}
