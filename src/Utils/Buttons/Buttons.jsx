export default function Buttons(props){
    return(
        <button id={props.btnId} onClick={props.handleClick}>{props.buttonsLabel}</button>
    )
}