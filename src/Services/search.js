import get from "./get"
export default function search(item){

    const cardsArr = get()
    let areSame = false;
    cardsArr.forEach(cardItems => {
        if(cardItems.title == item.title && cardItems.date == item.date){
            console.log(item)
            console.log(cardItems)            
            areSame =  true
        }
    });    
    return areSame;
}