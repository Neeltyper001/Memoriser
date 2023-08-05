import React from "react";
import getStatus from "../../Services/getStatus";

export default function Pointer(props){

    const currentStatus = (getStatus(props.ptrId) ? 'onGoing':'completed')
    return(
    <>
        <strong id={props.ptrId} onClick={props.handleStatus} className={currentStatus}>{currentStatus}</strong>
    </>

    )
}