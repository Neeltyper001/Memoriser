import React from "react";
import getStatus from "../../Services/getStatus";

export default function Pointer(props){

    const currentStatus = (getStatus(props.ptrId) ? {currStatus: 'onGoing..', styleToApply: 'text-yellow-300 text-xl p-2 bg-green-500 rounded-lg hover:cursor-pointer'}:{currStatus:'completed',styleToApply:'text-black p-2 bg-gray-500 rounded-lg hover:cursor-pointer'})
    return(
    <>
        <strong id={props.ptrId} onClick={props.handleStatus} className={currentStatus.styleToApply}>{currentStatus.currStatus}</strong>
    </>

    )
}