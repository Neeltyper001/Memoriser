import get from "./get"
export default function setAt(idx,item){

    const cardsArr = get()
    if(idx - 1 > cardsArr.length || idx <=0){
        alert("Cannot insert there!")
    }

    else{
        cardsArr.splice(idx-1,0,item)
        localStorage.removeItem(0)
        localStorage.setItem(0,JSON.stringify(cardsArr))
    }
}