import React from 'react';
import Iconlink from '../Elements/Iconlink';
import Titlefooter from '../Elements/Titlefooter';

export default function Colunmtwofooter(props){

    return(
        <div style={{width:'350px',height:'250px',direction:'rtl'}}>
       <Titlefooter titlefooter="لینک ها ی کاربردی"/>
        <br/>
       <Iconlink linkicon="#">متن ساختگی</Iconlink>
       <Iconlink linkicon="#">متن ساختگی</Iconlink>
       <Iconlink linkicon="#">متن ساختگی</Iconlink>
       <Iconlink linkicon="#">متن ساختگی</Iconlink>
       <Iconlink linkicon="#">متن ساختگی</Iconlink>
      </div>
    )
}