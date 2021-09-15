import React from 'react'

export default function Inputform(props) {
    return (
        <form >
            <label style={{fontSize:'19px',color:'#005091',direction:'rtl'}}>
                 {props.title}
            </label>
            <br/>
         <textarea style={{border:'solid 1px #005091',height:props.height,width:'250px',borderRadius:'10px',outline: "none",
    border: "none",
    }}/>
         
        </form>
    )
}
