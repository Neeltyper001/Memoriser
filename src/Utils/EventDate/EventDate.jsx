import getStatus from "../../Services/getStatus"
export default function EventDate(props){
    const currentStatus = (getStatus(props.dateId) ?  'text-3xl p-1 bg-yellow-300 rounded-xl ':'text-3xl p-1 bg-yellow-300 rounded-xl line-through')
    return(
        <>   
            <p className={currentStatus}>{props.date}</p>               
        </>
    )
}