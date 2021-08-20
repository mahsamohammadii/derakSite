import React from 'react'

export default function Inputform(props) {
    return (
        <form >
            <label style={{fontSize:'20px',color:'darkblue',direction:'rtl'}}>
                 {props.title}
            </label>
            <br/>
         <input style={{border:'solid 4px darkblue',height:props.height,width:'400px',color:'white',borderRadius:'10px'}}/>
         
        </form>
    )
}
