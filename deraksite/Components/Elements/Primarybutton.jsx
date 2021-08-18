import { ButtonProps } from "@material-ui/core";
import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    pbutton: {
      width: "100%",
    },
  });
  export default function Primarybutton(props){
      
    const classes = useStyles();

    return(

        <>
      <Button
        variant="contained"
        color="primary"
        className={classes.pbutton}
        onClick={props.onClick}
      >
        {props.children}
        salam
      </Button>
    </>
    )
  }