export default function clear(){
    if(localStorage.length == 0){
        alert("Items already cleared nothing to clear!!")
    }
    else
    localStorage.clear()
}