import React from "react";


export default function Label(props){
    
    return(
    <>
        <label className="text-2xl font-bold">{props.labelVal}</label>
    </>
    )
}