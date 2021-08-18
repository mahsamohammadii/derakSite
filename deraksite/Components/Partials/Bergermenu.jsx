import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';


const useStyles = makeStyles({
    list: {
      width: 200,
     
    },
    listtype:{
      direction:'rtl',
      textAlign:'right',
    },
    
  });
  
  export default function Bergermenu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
    
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]:  anchor === 'right'
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List >
          {['خانه', 'درباره ما', 'خدمات برندینگ', 'دوره برندینگ','مقالات ','ارتباط با ما','عضویت در خبرنامه'].map((text, index) => (
            <ListItem  button key={text}>
              <ListItemText className={classes.listtype} primary={text} />
            </ListItem>
          ))}
        </List>
      
      
      </div>
    );
  
    return (
      <div style={{direction:'rtl'}}>
        {[ 'left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuOpenIcon style={{fontSize:'60px',color:'white'}}/>
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
  }