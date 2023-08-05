export default function EventTitle(props){    
    return(
        <>
        <h1 id={props.titleId} onClick={props.handleClick}>{props.title}</h1>
         {/* <h1>{props.title}</h1> */}
        </>
    )
}