import React from "react";
import { useRef } from "react";

export default function Input(props){
    const textValue = useRef();
    return(
    <>
        <input className='border-4 text-center rounded-xl' type="text" ref={props.inputVal} placeholder={props.inputTitle} ></input>
    </>
    )
}