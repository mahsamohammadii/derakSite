import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import itemDataa from '../Partials/itemDataa';
import Imageoverlay from '../Partials/Imageoverlay';


export default function Articleimglist() {
 

  return (
    <div style={{padding:'0px'}} >
      <ImageList style={{flexWrap: 'nowrap',}}  cols={5.5}>
        {itemDataa.map((item) => (
          <ImageListItem style={{height:'450px',width:'250px' }} key={item.img} >
            
           <Imageoverlay srcoverlay={item.img} linkoverlay="#" altoverlay="ax" titleoverlay="متن ساختگی"/>

          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}