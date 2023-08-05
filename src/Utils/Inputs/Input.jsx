import React from "react";
import { useRef } from "react";

export default function Input(props){
    const textValue = useRef();
    return(
    <>
        <input type="text" ref={props.inputVal} placeholder={props.inputTitle} ></input>
    </>
    )
}