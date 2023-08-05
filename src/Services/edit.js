import get from "./get";
export default function edit(e){
    const editId = e.target.id;
    const cardsArr = get()
    cardsArr[editId].editStatus = !cardsArr[editId].editStatus
    localStorage.removeItem(0)
    localStorage.setItem(0,JSON.stringify(cardsArr))
}