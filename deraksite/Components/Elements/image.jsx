import React from 'react';

export default function Image(props){

        return(
            <img className="imgfit" width={props.width} height={props.height} src={props.src} alt={props.alt} style={{justifyItems:props.alignimg,borderRadius:props.radiusimg ,border:props.border}} />
        )
}