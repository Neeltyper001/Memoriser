import get from "./get"
export default function getStatus(statusId){
    const cardsArr = get()  
    return cardsArr[statusId].progressStatus 
}