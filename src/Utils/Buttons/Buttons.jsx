export default function Buttons(props){
    return(
        <button className={props.styleClass} id={props.btnId} onClick={props.handleClick}>{props.buttonsLabel}</button>
    )
}