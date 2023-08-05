import get from "./get";
export default function setStatus(e){
    console.log('Inside setStatus')
    const statusId = e.target.id;    
    const cardsArr = get()    
    cardsArr[statusId].progressStatus = !cardsArr[statusId].progressStatus    
    localStorage.removeItem(0);
    localStorage.setItem(0,JSON.stringify(cardsArr))
}