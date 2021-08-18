import React, { useEffect } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Timelineseparator from "../Elements/Timelineseparator";
import Timelinetypetitle from "../Elements/Timelinetypetitle";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import Timelineelement from "../Elements/Timelineelement";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineConnector from "@material-ui/lab/TimelineConnector";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url("/static/o.jpg")',
    backgroundSize: "cover",
    position: "relative",
    marginBottom: "50px",
   
    color: "white",
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  roottwo: {
    backgroundImage: 'url("/static/o.jpg")',
    backgroundSize: "cover",
    position: "relative",
    marginBottom: "50px",
    
    color: "white",
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));

export default function Timelinebase(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.roottwo}>
        <div className="divopacity"></div>
        <Grid item>
          <Timeline align="alternate">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => {
              return (
                <TimelineItem key={i}>
                  <TimelineOppositeContent>
                    <Typography style={{ color: "white" }}>
                      {" "}
                      لورم اسپورم متن ساختگی و گرافیکی لورم اسپورم متن ساختگی و
                      گرافیکی لورم اسپورم متن ساختگی و گرافیکی لورم اسپورم متن
                      ساختگی و گرافیکی
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      style={{ marginBottom: "15px", marginTop: "15px" }}
                      className="dot1"
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      className="title"
                      variant="h6"
                      component="h1"
                      style={{ color: "white" }}
                    >
                      گام {i}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.root}>
        <Grid className="timelinegrid">
          <div className="divopacity"></div>
          <Timeline align="alternate">
            <Timelineelement
              titletimeline="گام اول"
              typetimeline=" لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی 
               لورم اسپورم متن ساختگی و گرافیکی"
            />
            <Timelineelement
              titletimeline="گام اول"
              typetimeline=" لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی 
               لورم اسپورم متن ساختگی و گرافیکی"
            />
            <Timelineelement
              titletimeline="گام اول"
              typetimeline=" لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی 
               لورم اسپورم متن ساختگی و گرافیکی"
            />
            <Timelineelement
              titletimeline="گام اول"
              typetimeline=" لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی 
               لورم اسپورم متن ساختگی و گرافیکی"
            />
            <Timelineelement
              titletimeline="گام اول"
              typetimeline=" لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی 
               لورم اسپورم متن ساختگی و گرافیکی"
            />
            <Timelineelement
              titletimeline="گام اول"
              typetimeline=" لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی 
               لورم اسپورم متن ساختگی و گرافیکی"
            />
            <Timelineelement
              titletimeline="گام اول"
              typetimeline=" لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی 
               لورم اسپورم متن ساختگی و گرافیکی"
            />
            <Timelineelement
              titletimeline="گام اول"
              typetimeline=" لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی 
               لورم اسپورم متن ساختگی و گرافیکی"
            />
            <Timelineelement
              titletimeline="گام اول"
              typetimeline=" لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی
               لورم اسپورم متن ساختگی و گرافیکی 
               لورم اسپورم متن ساختگی و گرافیکی"
            />

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{ marginBottom: "15px", marginTop: "15px" }}
                  className="dot1"
                />
              </TimelineSeparator>
              <TimelineContent>
                <Typography elevation={1} className="paper">
                  <Timelinetypetitle>گام اول</Timelinetypetitle>
                  <Grid>
                    <Typography style={{ color: "white" }}>
                      لورم اسپورم متن ساختگی و گرافیکی لورم اسپورم متن ساختگی و
                      گرافیکی لورم اسپورم متن ساختگی و گرافیکی لورم اسپورم متن
                      ساختگی و گرافیکی
                    </Typography>
                  </Grid>
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </>
  );
}
