import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Navhr from '../Elements/Navhr';
import {Link , BrowserRouter as Router, Route, Switch } from 'react-router-dom';



export default function Navlink(props){

  const preventDefault = (event) => event.preventDefault();
  
    return(
      <Grid  className="navroot">
         <Router>  <Link className="navlink"  style={{textDecoration:'none',color:props.color}} onClick={preventDefault} to={props.to}>
             {props.title}  
             <Navhr color={props.hrColor}/>
                   </Link> 
          </Router> 
        
        </Grid>
    );
}