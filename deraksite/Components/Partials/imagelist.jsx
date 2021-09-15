import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import itemData from "../Partials/itemData";
import itemDatatwo from "../Partials/itemDatatwo";
import Image from "next/image";
import { Grid, Link } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  roottwo: {
    color: "white",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

export default function BasicImageList() {
  const classes = useStyles();

  return (
    <Grid  >
     

      <Grid  style={{ margin: "0px" }} className={classes.root}>
        <ImageList rowHeight={220} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1}>
              {/* <h1>{item.title}</h1> */}
              <Grid item xs={12}>
                <Link href="#">
                  {" "}
                  <Image
                    className="imgfit"
                    layout="fill"
                    src={item.img}
                    alt={item.title}
                  />
                </Link>{" "}
              </Grid>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}
