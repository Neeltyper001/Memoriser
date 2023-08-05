import getStatus from "../../Services/getStatus"
export default function EventTitle(props){    
    const currentStatus = (getStatus(props.titleId) ?  'text-4xl font-bold':'text-4xl font-bold line-through')
    return(
        <>   
        <h1 className={currentStatus}>{props.title}</h1>              
        </>
    )
}