import React from "react";
import EventTitle from "../../Utils/EventTitle/EventTitle";
import EventDate from "../../Utils/EventDate/EventDate";
import Pointer from "../../Utils/Pointer/Pointer";
import Buttons from "../../Utils/Buttons/Buttons";
import CardNumber from "../../Utils/Number/CardNumber";

export default function Cards(props){    
    
    return (
    <>
        <div  className="relative left-1/2 -translate-x-1/2 flex flex-col justify-around items-center w-[500px] border-black border-2 rounded-xl h-[350px] sz325:w-[350px]">
                <CardNumber numberId={props.cardId} />
                <EventTitle titleId={props.cardId} title= {props.cardTitle} />
                <EventDate  dateId={props.cardId} date={props.cardDate} />
                <Buttons styleClass={'rem-clr-btn'} handleClick={props.removeOption} btnId={props.cardId} buttonsLabel={"Remove"}/>                
                <Pointer ptrId={props.cardId} handleStatus={props.statusOption}/>                
        </div>
    </>
    )
}