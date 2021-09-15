import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Image from "../Elements/image";
import Typographyp from "../Elements/Typographyp";

export default function Imagearticledetail() {
  return (
    <Grid>
      <Grid className="imgarticledetail">
        {/* <Image src="/static/pic10.jpg" width="100%" height="370px" /> */}
         <div className="divarticleimgdetail">
        <Typography
          style={{ fontSize: "24px", textAlign: "right", color: "white" ,padding:"3px"  }}
        >
          خانواده
        </Typography>
        <Typographyp textcolor="white"
          size="20px"
          text="لورم اسپورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        />
      </div>
      </Grid>
     
    </Grid>
  );
}
