import isEmpty from "./isEmpty"
import get from "./get"
import clear from "./clear"
export default function remove(e){
    const btnId = e.target.id
    const cardsArr = get()
    if(cardsArr.length > 1){
        cardsArr.splice(btnId,1)
        localStorage.removeItem(0)
        localStorage.setItem(0, JSON.stringify(cardsArr))
    }

    else{
        clear()
    }
    
}