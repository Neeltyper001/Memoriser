import get from "./get"
import search from "./search"
export default function setAt(idx,item){
    if(item.date == '' || item.title == '')  {
        alert("Cannot Enter the empty item")
    }

    else if(search(item)){
        
        alert("Duplicate entries not allowed!!")
    }

    else{
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
}