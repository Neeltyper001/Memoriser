import React from "react";
import EventTitle from "../../Utils/EventTitle/EventTitle";
import EventDate from "../../Utils/EventDate/EventDate";
import Pointer from "../../Utils/Pointer/Pointer";
import Buttons from "../../Utils/Buttons/Buttons";
import get from "../../Services/get";


export default function Cards(props){    
    
    return (
    <>
        <div  className="cards">
            <div  >               
                <EventTitle title= {props.cardTitle} />
                <EventDate date={props.cardDate} />
                <Buttons handleClick={props.removeOption} btnId={props.cardId} buttonsLabel={"Remove"}/>
                <Buttons handleClick={props.editOption} btnId={props.cardId} buttonsLabel={"Edit"}/>
                
            </div>
            <div className="pointer">
                <Pointer ptrId={props.cardId} handleStatus={props.statusOption}/>
            </div>
        </div>
    </>
    )
}