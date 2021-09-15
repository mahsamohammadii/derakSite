import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Image from "../Elements/image";
import Navlink from "../Elements/Navlink";
import Titlefooter from "../Elements/Titlefooter";
export default function Articlebox(props) {
  return (
    <Grid>
      <Grid style={{ textAlign: "center" }}>
        <Image
          src={props.articlesrc}
          width="230px"
          height="330px"
          alignimg="center"
          radiusimg="10px"
        />
      </Grid>
      <Grid style={{ textAlign: "center" }}>
        {" "}
        <Typography
          style={{
            color: "#6b6741",
            fontSize: "22px",
            textAlign: "center",
            margin: "7px",
          }}
        >
          {props.titlearticle}
        </Typography>
        <Typography
          style={{
            color: "#013A63",
            fontSize: "17px",
            textAlign: "center",
            margin: "5px",
          }}
        >
          {props.textarticle}
        </Typography>
      </Grid>
      <Grid style={{ textAlign: "center" }}>
        {" "}
        <Navlink
          color="#0D60B5"
          href="#"
          title="بیشتر بخوانید"
          hrColor="#0D60B5"
        />
      </Grid>
    </Grid>
  );
}
